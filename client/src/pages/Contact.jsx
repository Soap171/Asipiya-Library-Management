import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "emailjs-com";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../components/ui/form";
import { Phone, Mail, MapPin } from "lucide-react";
import { Textarea } from "../components/ui/textarea";
import { ModeToggle } from "../components/mode-toggle";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(5, { message: "Message must be at least 5 characters" }),
});

function Contact() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send("service_h9zrqum", "template_4s8222h", data, "4Z17ZOGgVQQjOzql-")
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-white-900 dark:text-white-300 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
          </p>
          <div className="space-y-4 text-gray-800 dark:text-gray-400">
            <p className="flex items-center text-lg"><Phone className="mr-3 text-blue-700 dark:text-blue-400" /> (+84) 123 456 789</p>
            <p className="flex items-center text-lg"><Mail className="mr-3 text-blue-700 dark:text-blue-400" /> contact.bookscart@gmail.com</p>
            <p className="flex items-center text-lg"><MapPin className="mr-3 text-blue-700 dark:text-blue-400" /> 227 East 42nd St, New York, NY 1007</p>
          </div>
        </div>

        <div>
          <div className="bg-white p-8 rounded-lg shadow-2xl dark:bg-gray-900">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-gray-300">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" className="border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 h-12 rounded-md" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" className="border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 h-12 rounded-md" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-gray-300">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter your message" className="min-h-[120px] border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded-md" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white h-12 rounded-md shadow-lg transition-transform transform hover:scale-105"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
