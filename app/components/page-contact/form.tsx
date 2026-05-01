import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { HugeiconsIcon } from '@hugeicons/react';
import { SentIcon } from '@hugeicons/core-free-icons';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

// --------------------
// Validation Schema
// --------------------
const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  organization: z.string().optional(),
  role: z.string().optional(),
  interest: z.string().min(1, 'Please select an option'),
  problem: z.string().min(10, 'Tell us a bit more'),
  foundUs: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

// --------------------
// Component
// --------------------
const FormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      organization: '',
      role: '',
      interest: '',
      problem: '',
      foundUs: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    try {
      const res = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (err) {
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // --------------------
  // Form UI
  // --------------------
  return (
    <div className="bg-secondary/10 space-y-10 md:space-y-15 p-4 md:p-10">
      <header className="flex justify-center text-accent text-[10px] md:text-base lg:text-sm capitalize tracking-wider gap-4">
        <h2 className="bg-accent/10 rounded-full px-4 py-2">Contact Form</h2>
      </header>

      <div className="bg-white mx-auto max-w-[1300px] rounded-[40px] grid grid-cols-1 md:grid-cols-2 p-4 md:p-10 gap-10">
        {/* Image */}
        <figure className="relative overflow-hidden aspect-4/3 md:aspect-auto rounded-[30px]">
          <img
            src="contact/form.jpg"
            className="w-full h-full object-cover object-top"
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent to-primary/60"></div>
        </figure>

        {/* Form */}
        <Form {...form}>
          {!isSubmitted && (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name + Organization */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your full name"
                          className="py-6 px-4 rounded-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organisation</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your organisation"
                          className="py-6 px-4 rounded-full"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* Role */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role / Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your role"
                        className="py-6 px-4 rounded-full"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Interest */}
              <FormField
                control={form.control}
                name="interest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Which best describes your interest?{' '}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full py-6 px-4 rounded-full">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="schools">Schools</SelectItem>
                        <SelectItem value="corporate-workshops">
                          Corporate Workshops
                        </SelectItem>
                        <SelectItem value="safety-audit">
                          Safety Audit
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Problem */}
              <FormField
                control={form.control}
                name="problem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Tell us what you are trying to solve{' '}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={10}
                        className="min-h-40 py-6 px-4 rounded-4xl"
                        placeholder="Describe the challenges or opportunities you're facing"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Found Us */}
              <FormField
                control={form.control}
                name="foundUs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How did you find Peace Shapers?</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Google, Social media, Referral"
                        className="py-6 px-4 rounded-full"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button disabled={isSubmitting} colorScheme="accent" size="default" className="w-full md:w-auto mt-6">
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Get in touch
                    <HugeiconsIcon icon={SentIcon} size={18} />
                  </>
                )}
              </Button>
            </form>
          )}

          {isSubmitted && (
            <div className="min-h-160 flex flex-col items-center justify-center space-y-8 py-20">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                <HugeiconsIcon
                  icon={SentIcon}
                  size={40}
                  className="text-accent"
                />
              </div>

              {/* Success Message */}
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <h3 className="text-3xl md:text-4xl font-normal text-primary max-w-sm leading-tight">
                  Thank you for reaching out!
                </h3>
                <p className="text-primary/70 text-base font-light max-w-sm">
                  We've received your message and will get back to you as soon
                  as possible.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  size="sm"
                  colorScheme="accent"
                >
                  Send another message
                </Button>
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default FormComponent;
