import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useSeoMeta } from "@/hooks/use-seo-meta";
import { apiRequest } from "@/lib/queryClient";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  useSeoMeta({
    title: "Contact Us",
    description:
      "Get in touch with the Tilz Group team in Leeds, UK. Enquire about ecommerce consulting, 3PL logistics, or the Hercommerce B2B trade platform.",
    path: "/contact",
  });
  return (
    <div className="pt-20">
      <ContactHero />
      <ContactFormSection />
      <OfficeInfo />
    </div>
  );
}

function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E40AF] py-20 lg:py-28" data-testid="section-contact-hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Poppins'] tracking-tight mb-6" data-testid="text-contact-hero-headline">
          Let's Work Together
        </h1>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Whether you're looking for ecommerce consulting, 3PL logistics, or want to explore a partnership, our team is ready to help.
        </p>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you within 24-48 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="section-contact-form">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-2" data-testid="text-form-headline">
              Send Us a Message
            </h2>
            <p className="text-[#64748B] text-lg mb-10">
              Fill out the form below and our team will respond within 24-48 hours.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company" {...field} data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-subject">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ecommerce-consulting">Ecommerce Consulting</SelectItem>
                            <SelectItem value="3pl-logistics">3PL & Logistics</SelectItem>
                            <SelectItem value="hercommerce-partnership">Hercommerce Partnership</SelectItem>
                            <SelectItem value="strategy-call">Book a Strategy Call</SelectItem>
                            <SelectItem value="general-enquiry">General Enquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project or enquiry..."
                          className="min-h-[160px] resize-none"
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="font-semibold px-10"
                  disabled={mutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {mutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                {mutation.isSuccess && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 rounded-lg p-4" data-testid="text-success-message">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">Thank you! Your message has been sent successfully.</span>
                  </div>
                )}
              </form>
            </Form>
          </div>

          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <Card className="bg-[#F1F5F9] border-0 p-0 overflow-visible" data-testid="card-contact-info">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#0F172A] font-['Poppins'] mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <a href="mailto:info@tilzgroup.com" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-[#1E40AF] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[#0F172A] font-medium">Email</p>
                        <p className="text-[#64748B] text-sm group-hover:text-[#1E40AF] transition-colors" data-testid="text-contact-email">info@tilzgroup.com</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#1E40AF] rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[#0F172A] font-medium">Office Address</p>
                        <p className="text-[#64748B] text-sm leading-relaxed" data-testid="text-contact-location">
                          Unit 3A, Eagle Industrial Estate<br />
                          4 Torre Road<br />
                          Leeds, LS9 7QL<br />
                          United Kingdom
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#1E40AF] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[#0F172A] font-medium">Phone</p>
                        <p className="text-[#64748B] text-sm" data-testid="text-contact-phone">Use the form above to arrange a call</p>
                      </div>
                    </div>

                    <a href="#" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-[#1E40AF] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[#0F172A] font-medium">LinkedIn</p>
                        <p className="text-[#64748B] text-sm group-hover:text-[#1E40AF] transition-colors" data-testid="text-contact-linkedin">Connect with us</p>
                      </div>
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9] border-0 p-0 overflow-visible" data-testid="card-quick-actions">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white font-['Poppins'] mb-4">Quick Actions</h3>
                  <p className="text-white/80 text-sm mb-6">
                    Choose the option that best fits your needs:
                  </p>
                  <div className="space-y-3">
                    {[
                      "Book a Strategy Call",
                      "Become a 3PL Client",
                      "Partner With Hercommerce",
                    ].map((action) => (
                      <button
                        key={action}
                        onClick={() => {
                          const subjectMap: Record<string, string> = {
                            "Book a Strategy Call": "strategy-call",
                            "Become a 3PL Client": "3pl-logistics",
                            "Partner With Hercommerce": "hercommerce-partnership",
                          };
                          form.setValue("subject", subjectMap[action] || "general-enquiry");
                          document.getElementById("root")?.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="w-full flex items-center justify-between bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm font-medium hover:bg-white/20 transition-colors text-left"
                        data-testid={`button-quick-${action.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {action}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfficeInfo() {
  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9]" data-testid="section-office-info">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#0F172A] font-['Poppins'] tracking-tight mb-4" data-testid="text-office-headline">
          Our Presence
        </h2>
        <p className="text-[#64748B] text-lg max-w-2xl mx-auto mb-12">
          Headquartered in Leeds with trade partnerships and marketplace presence across multiple international markets.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: MapPin, title: "Headquarters", desc: "Leeds, United Kingdom" },
            { icon: Globe, title: "Trade Partners", desc: "20+ Countries" },
            { icon: Mail, title: "Response Time", desc: "24-48 Hours" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-8 shadow-sm" data-testid={`office-${item.title.toLowerCase()}`}>
              <item.icon className="w-8 h-8 text-[#1E40AF] mx-auto mb-4" />
              <h3 className="text-[#0F172A] font-bold font-['Poppins'] mb-1">{item.title}</h3>
              <p className="text-[#64748B] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
