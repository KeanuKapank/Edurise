import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textArea";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "../styles/dateTimePickerStyling.css";
import { Label } from "../components/ui/label";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const contactInfo = [
  { icon: Mail, label: "Email", value: "edurise21@gmail.com" },
  {
    icon: MapPin,
    label: "Location",
    value: "South Africa, ZA",
  },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 9:00 AM – 6:00 PM SAST" },
];

const eduriseApiBaseUrl =  import.meta.env.VITE_EDURISE_API_URL || "http://localhost:7257/api";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consultationDate: new Date(),
    message: "",
  });

  const bookConsultation = async () => {
    setLoading(true);

    let endDate = new Date(formData.consultationDate);
    endDate.setMinutes(endDate.getMinutes() + 30);

    const rawData = {
        summary: "Consultation with " + formData.name,
        description: formData.message,
        email: formData.email,
        startDate: formData.consultationDate,
        endDate: endDate
    };

    axios
      .post(`${eduriseApiBaseUrl}/api/Events`, rawData,
      {
      headers: {
        'Content-Type': 'application/json',
      }})
      .then((response) => {
        setLoading(false);
        setError(false);
        setResponse(response.data);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    bookConsultation();
    toast.success("Thank you! We'll get back to you within 24 hours.");
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Let's Start a <span className="text-primary">Conversation</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or ready to begin? We'd love to hear from you. Your
              first consultation is always free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Reach out via any of the channels below, or fill out the form
                  and we'll respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                        {item.label}
                      </p>
                      <p className="text-sm text-primary font-medium mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-border bg-card">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    {loading ? "Loading..." : "Message Sent!"}
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    {error
                      ? "Something went wrong. Please try again later."
                      : "Thank you for reaching out. Lyle will reach out to you with the meeting link in due time."}
                  </p>
                  <p className="text-muted-foreground max-w-sm">
                    {response != null && !loading ?
                      `Your consultation is scheduled for ${new Date(response.scheduledDate).toLocaleString()}`
                      : null}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-full"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        endDate: new Date(),
                        message: "",
                      });
                    }}
                  >
                    Book Another Consultation
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 lg:p-10 rounded-2xl border border-primary bg-card space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="modern-picker">
                      <Label htmlFor="consultationDate">
                        Consultation Date
                      </Label>
                      <DateTimePicker
                        onChange={(date) => {
                          setFormData({ ...formData, consultationDate: date });
                          console.log(formData.consultationDate);
                        }}
                        value={formData.consultationDate}
                        minDate={new Date()}
                        required
                        disableClock={false}
                        clearIcon={null}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your goals and how we can help..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="min-h-32 rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl h-14 text-base font-medium gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Book Consultation
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
