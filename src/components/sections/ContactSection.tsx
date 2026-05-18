import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { ArrowUpRight, FileCheck2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { EASE } from "@/utils/motion";

const WEB3FORMS_ACCESS_KEY = "5056f6fe-c8df-41da-a2ba-1404ef7db393";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const inputBase =
  "w-full rounded-[12px] border border-black/10 bg-white/70 backdrop-blur-sm px-3 py-3 font-sans text-[15px] text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-300 focus:border-primary-glow focus:bg-white/90 focus:shadow-[0_0_0_4px_hsl(var(--primary-glow)/0.12)]";

const Field = ({
  label,
  id,
  type = "text",
  textarea = false,
  error,
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  textarea?: boolean;
  error?: string;
  placeholder?: string;
}) => (
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="block text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/80"
    >
      {label}
    </label>

    {textarea ? (
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        rows={5}
        className={inputBase}
        required
        aria-invalid={!!error}
      />
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className={inputBase}
        required
        aria-invalid={!!error}
      />
    )}

    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const parsed = contactSchema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New BioDrishti enquiry from ${parsed.data.name}`,
        from_name: parsed.data.name,
        email: parsed.data.email,
        message: parsed.data.message,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (json.success) {
        setSubmitted(true);
        toast.success("Message sent — we'll be in touch shortly.");
        form.reset();
      } else {
        toast.error(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-background-deep py-28 lg:py-36">
      <div className="absolute inset-x-0 top-0 h-px hairline" />

      <div className="container grid gap-16 lg:grid-cols-12">
        {/* LEFT SIDE */}
        <div className="lg:col-span-5">
          

          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Begin a <span className="italic text-primary-glow">conversation</span>.
          </h2>

          <p className="measure mt-6 text-base leading-relaxed text-muted-foreground">
            Whether you are a student looking for research mentorship, a professor
            interested in collaboration, an institution exploring advisory programs,
            or simply curious about how we can help — we would love to hear from you.
          </p>

          <div className="mt-10 space-y-6 text-sm">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent">
                Email
              </span>
              <div className="mt-1 font-serif text-base text-foreground">
                biodrishti@gmail.com
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-accent">
                Location
              </span>
              <div className="mt-1 font-serif text-base text-foreground">
                Mumbai, India
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="lg:col-span-7">
          <motion.form
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="surface-card p-8 md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex min-h-[280px] flex-col items-center justify-center text-center"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-primary/10 ring-1 ring-primary-glow/30">
                  <FileCheck2 className="h-5 w-5 text-primary" />
                </div>

                <h3 className="font-serif text-2xl">Thank you.</h3>

                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Thank you for reaching out. We will get back to you within 48 hours
                  at <b>biodrishti@gmail.com</b>.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <Field
                  label="Name"
                  id="name"
                  placeholder="Your full name"
                  error={errors.name}
                />

                <Field
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  error={errors.email}
                />

                <Field
                  label="Message"
                  id="message"
                  textarea
                  placeholder="Tell us about your research, your questions, your institution, or what brought you here."
                  error={errors.message}
                />

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={loading}
                  className="w-full sm:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </>
                  )}
                </Button>

                {/* Direct contact + notes */}
                <div className="mt-8 space-y-4 text-sm text-muted-foreground">
                  <p>
                    You can also reach us directly at:{" "}
                    <span className="text-foreground font-medium">
                      biodrishti@gmail.com
                    </span>
                  </p>

                  
                </div>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};