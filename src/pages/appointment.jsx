// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useLocation } from "wouter";
// import { ArrowLeft, CheckCircle, Calendar, Clock, User, Phone, Mail, MessageSquare, Stethoscope, Heart, Shield } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { useToast } from "@/hooks/use-toast";
// import { useState } from "react";
// const appointmentSchema = z.object({
//     name: z.string().min(2, "Name must be at least 2 characters"),
//     phone: z.string().min(10, "Enter a valid phone number"),
//     email: z.string().email("Enter a valid email address"),
//     doctor: z.string().min(1, "Please select a doctor"),
//     date: z.string().min(1, "Please select a date"),
//     time: z.string().min(1, "Please select a time"),
//     message: z.string().optional(),
// });
// const doctors = [
//     { value: "Dr. Nikhilkumar Patel", label: "Dr. Nikhilkumar Patel — Cardiologist" },
//     { value: "Dr. Riya Patel", label: "Dr. Riya Patel — Dentist (Aura Dental Clinic)" },
// ];
// const timeSlots = [
//     "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
//     "11:00 AM", "11:30 AM", "12:00 PM", "02:00 PM",
//     "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
//     "04:30 PM", "05:00 PM", "05:30 PM",
// ];
// const trustBadges = [
//     { icon: Shield, text: "Secure & Private" },
//     { icon: Heart, text: "Expert Care" },
//     { icon: Clock, text: "Same-Day Confirmation" },
// ];
// export default function AppointmentPage() {
//     const [, setLocation] = useLocation();
//     const { toast } = useToast();
//     const [submitted, setSubmitted] = useState(false);
//     const [bookedName, setBookedName] = useState("");
//     const form = useForm({
//         resolver: zodResolver(appointmentSchema),
//         defaultValues: {
//             name: "",
//             phone: "",
//             email: "",
//             doctor: "",
//             date: "",
//             time: "",
//             message: "",
//         },
//     });
//     const onSubmit = (values) => {
//         try {
//             setBookedName(values.name);
//             setSubmitted(true);
//             toast({
//                 title: "Appointment Booked!",
//                 description: "Your appointment request has been received.",
//             });
//         } catch (error) {
//             toast({
//                 title: "Booking Failed",
//                 description: "Something went wrong. Please try again.",
//                 variant: "destructive",
//             });
//         }
//     };
//     const today = new Date().toISOString().split("T")[0];
//     return (<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50" data-testid="appointment-page">
//       {/* Success screen */}
//       <AnimatePresence>
//         {submitted && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-white/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
//             <motion.div initial={{ scale: 0.8, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 250, damping: 20 }} className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">
//               <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 300 }} className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-300/50">
//                 <CheckCircle className="w-12 h-12 text-white"/>
//               </motion.div>
//               <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-2xl font-bold text-gray-900 mb-2">
//                 Appointment Booked!
//               </motion.h2>
//               <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-gray-500 mb-7">
//                 Thank you, <span className="font-semibold text-blue-700">{bookedName}</span>! Your appointment has been successfully booked. We'll contact you shortly to confirm.
//               </motion.p>
//               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-blue-50 rounded-2xl p-4 mb-7 border border-blue-100">
//                 <p className="text-sm text-blue-700 font-semibold mb-1">Need immediate help?</p>
//                 <a href="tel:+911800123456" className="text-blue-600 font-bold text-lg hover:text-blue-700">+91 1800-123-456</a>
//               </motion.div>
//               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-3">
//                 <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={() => { setSubmitted(false); form.reset(); }} className="flex-1 px-5 py-3 border border-gray-200 text-gray-700 font-medium rounded-2xl hover:bg-gray-50 transition-colors text-sm" data-testid="book-another-btn">
//                   Book Another
//                 </motion.button>
//                 <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={() => setLocation("/")} className="flex-1 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm text-sm" data-testid="go-home-btn">
//                   Go to Home
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           </motion.div>)}
//       </AnimatePresence>

//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white pt-8 pb-16 px-4">
//         <div className="max-w-3xl mx-auto">
//           <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={() => setLocation("/")} className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors mb-6" data-testid="back-to-home">
//             <ArrowLeft className="w-4 h-4"/>
//             Back to Home
//           </motion.button>

//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
//             <h1 className="text-3xl md:text-4xl font-bold mb-2">Book an Appointment</h1>
//             <p className="text-blue-200 text-sm">Navjivan Hospital — Gujarat, India</p>
//           </motion.div>

//           {/* Trust badges */}
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-4 mt-6">
//             {trustBadges.map(({ icon: Icon, text }) => (<div key={text} className="flex items-center gap-2 text-blue-200 text-sm">
//                 <Icon className="w-4 h-4 text-green-400"/>
//                 {text}
//               </div>))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Form Card — overlaps header */}
//       <div className="max-w-3xl mx-auto px-4 -mt-8 pb-12">
//         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7" data-testid="appointment-form">
//               {/* Personal Information */}
//               <div>
//                 <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5 flex items-center gap-2">
//                   <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</span>
//                   Personal Information
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <FormField control={form.control} name="name" render={({ field }) => (<FormItem>
//                         <FormLabel className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
//                           <User className="w-3.5 h-3.5 text-blue-400"/>
//                           Full Name
//                         </FormLabel>
//                         <FormControl>
//                           <Input className="rounded-xl border-gray-200 focus:border-blue-400" placeholder="Enter your full name" {...field} data-testid="input-name"/>
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>)}/>
//                   <FormField control={form.control} name="phone" render={({ field }) => (<FormItem>
//                         <FormLabel className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
//                           <Phone className="w-3.5 h-3.5 text-blue-400"/>
//                           Phone Number
//                         </FormLabel>
//                         <FormControl>
//                           <Input className="rounded-xl border-gray-200 focus:border-blue-400" placeholder="+91 9876543210" {...field} data-testid="input-phone"/>
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>)}/>
//                   <FormField control={form.control} name="email" render={({ field }) => (<FormItem className="sm:col-span-2">
//                         <FormLabel className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
//                           <Mail className="w-3.5 h-3.5 text-blue-400"/>
//                           Email Address
//                         </FormLabel>
//                         <FormControl>
//                           <Input className="rounded-xl border-gray-200 focus:border-blue-400" type="email" placeholder="you@example.com" {...field} data-testid="input-email"/>
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>)}/>
//                 </div>
//               </div>

//               <div className="border-t border-dashed border-gray-100"/>

//               {/* Appointment Details */}
//               <div>
//                 <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5 flex items-center gap-2">
//                   <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">2</span>
//                   Appointment Details
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <FormField control={form.control} name="doctor" render={({ field }) => (<FormItem className="sm:col-span-2">
//                         <FormLabel className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
//                           <Stethoscope className="w-3.5 h-3.5 text-blue-400"/>
//                           Select Doctor
//                         </FormLabel>
//                         <Select onValueChange={field.onChange} defaultValue={field.value}>
//                           <FormControl>
//                             <SelectTrigger className="rounded-xl border-gray-200" data-testid="select-doctor">
//                               <SelectValue placeholder="Choose a specialist"/>
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             {doctors.map((d) => (<SelectItem key={d.value} value={d.value}>
//                                 {d.label}
//                               </SelectItem>))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>)}/>
//                   <FormField control={form.control} name="date" render={({ field }) => (<FormItem>
//                         <FormLabel className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
//                           <Calendar className="w-3.5 h-3.5 text-blue-400"/>
//                           Preferred Date
//                         </FormLabel>
//                         <FormControl>
//                           <Input className="rounded-xl border-gray-200" type="date" min={today} {...field} data-testid="input-date"/>
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>)}/>
//                   <FormField control={form.control} name="time" render={({ field }) => (<FormItem>
//                         <FormLabel className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
//                           <Clock className="w-3.5 h-3.5 text-blue-400"/>
//                           Preferred Time
//                         </FormLabel>
//                         <Select onValueChange={field.onChange} defaultValue={field.value}>
//                           <FormControl>
//                             <SelectTrigger className="rounded-xl border-gray-200" data-testid="select-time">
//                               <SelectValue placeholder="Select a time slot"/>
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             {timeSlots.map((slot) => (<SelectItem key={slot} value={slot}>
//                                 {slot}
//                               </SelectItem>))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>)}/>
//                   <FormField control={form.control} name="message" render={({ field }) => (<FormItem className="sm:col-span-2">
//                         <FormLabel className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
//                           <MessageSquare className="w-3.5 h-3.5 text-blue-400"/>
//                           Message <span className="text-gray-400 font-normal text-xs">(optional)</span>
//                         </FormLabel>
//                         <FormControl>
//                           <Textarea className="rounded-xl border-gray-200" placeholder="Describe your symptoms or reason for visit..." rows={3} {...field} data-testid="input-message"/>
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>)}/>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3 pt-1">
//                 <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} type="button" onClick={() => setLocation("/")} className="sm:w-auto px-6 py-3.5 border border-gray-200 text-gray-600 font-semibold rounded-2xl hover:bg-gray-50 transition-colors text-sm" data-testid="cancel-btn">
//                   Cancel
//                 </motion.button>
//                 <motion.button whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} type="submit" className="flex-1 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-2xl transition-all shadow-md shadow-blue-200 text-sm" data-testid="submit-appointment-btn">
//                   Confirm Appointment
//                 </motion.button>
//               </div>
//             </form>
//           </Form>
//         </motion.div>

//         {/* Emergency notice */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-5 bg-red-50 border border-red-100 rounded-2xl p-4 flex items-start gap-3">
//           <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0 animate-pulse"/>
//           <p className="text-sm text-red-700">
//             <span className="font-bold">Medical Emergency?</span> Do not use this form. Call immediately:{" "}
//             <a href="tel:+911800999000" className="font-bold underline">+91 1800-999-000</a> (24/7)
//           </p>
//         </motion.div>
//       </div>
//     </div>);
// }
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "wouter";
import { ArrowLeft, CheckCircle, Calendar, Clock, User, Phone, Mail, MessageSquare, Stethoscope, Heart, Shield, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// 🔧 Toggle this flag to turn the appointment booking service on/off.
// Set to `true` when you're ready to accept bookings again.
const APPOINTMENT_SERVICE_ENABLED = false;

const appointmentSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().min(10, "Enter a valid phone number"),
    email: z.string().email("Enter a valid email address"),
    doctor: z.string().min(1, "Please select a doctor"),
    date: z.string().min(1, "Please select a date"),
    time: z.string().min(1, "Please select a time"),
    message: z.string().optional(),
});
const doctors = [
    { value: "Dr. Nikhilkumar Patel", label: "Dr. Nikhilkumar Patel — Cardiologist" },
    { value: "Dr. Riya Patel", label: "Dr. Riya Patel — Dentist (Aura Dental Clinic)" },
];
const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "02:00 PM",
    "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
    "04:30 PM", "05:00 PM", "05:30 PM",
];
const trustBadges = [
    { icon: Shield, text: "Secure & Private" },
    { icon: Heart, text: "Expert Care" },
    { icon: Clock, text: "Same-Day Confirmation" },
];

export default function AppointmentPage() {
    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const [submitted, setSubmitted] = useState(false);
    const [bookedName, setBookedName] = useState("");
    const form = useForm({
        resolver: zodResolver(appointmentSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            doctor: "",
            date: "",
            time: "",
            message: "",
        },
    });
    const onSubmit = (values) => {
        try {
            setBookedName(values.name);
            setSubmitted(true);
            toast({
                title: "Appointment Booked!",
                description: "Your appointment request has been received.",
            });
        } catch (error) {
            toast({
                title: "Booking Failed",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        }
    };
    const today = new Date().toISOString().split("T")[0];

    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50" data-testid="appointment-page">
      {/* Success screen */}
      <AnimatePresence>
        {submitted && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-white/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.8, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 250, damping: 20 }} className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 300 }} className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-300/50">
                <CheckCircle className="w-12 h-12 text-white"/>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-2xl font-bold text-gray-900 mb-2">
                Appointment Booked!
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-gray-500 mb-7">
                Thank you, <span className="font-semibold text-blue-700">{bookedName}</span>! Your appointment has been successfully booked. We'll contact you shortly to confirm.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-blue-50 rounded-2xl p-4 mb-7 border border-blue-100">
                <p className="text-sm text-blue-700 font-semibold mb-1">Need immediate help?</p>
                <a href="tel:+911800123456" className="text-blue-600 font-bold text-lg hover:text-blue-700">+91 1800-123-456</a>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-3">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={() => { setSubmitted(false); form.reset(); }} className="flex-1 px-5 py-3 border border-gray-200 text-gray-700 font-medium rounded-2xl hover:bg-gray-50 transition-colors text-sm" data-testid="book-another-btn">
                  Book Another
                </motion.button>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={() => setLocation("/")} className="flex-1 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm text-sm" data-testid="go-home-btn">
                  Go to Home
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>)}
      </AnimatePresence>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white pt-8 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={() => setLocation("/")} className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors mb-6" data-testid="back-to-home">
            <ArrowLeft className="w-4 h-4"/>
            Back to Home
          </motion.button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Book an Appointment</h1>
            <p className="text-blue-200 text-sm">Navjivan Hospital — Bharuch , Gujarat </p>
          </motion.div>

          {/* Trust badges */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-4 mt-6">
            {trustBadges.map(({ icon: Icon, text }) => (<div key={text} className="flex items-center gap-2 text-blue-200 text-sm">
                <Icon className="w-4 h-4 text-green-400"/>
                {text}
              </div>))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-8 pb-12">
        {!APPOINTMENT_SERVICE_ENABLED ? (
          /* Service Unavailable Card */
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center" data-testid="service-unavailable-card">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 300 }} className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-amber-500"/>
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Appointment Booking Temporarily Unavailable
            </h2>
            <p className="text-gray-500 mb-7 max-w-md mx-auto">
              We're sorry, online appointment booking is currently switched off. Please check back later, or contact us directly to schedule your visit.
            </p>

            <div className="bg-blue-50 rounded-2xl p-5 mb-7 border border-blue-100 max-w-sm mx-auto">
              <p className="text-sm text-blue-700 font-semibold mb-1">Call us to book directly</p>
              <a href="tel:+911800123456" className="text-blue-600 font-bold text-lg hover:text-blue-700">+91 8866626109</a>
            </div>

            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setLocation("/")} className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-2xl transition-all shadow-md shadow-blue-200 text-sm" data-testid="go-home-btn-unavailable">
              Go to Home
            </motion.button>
          </motion.div>
        ) : (
          /* Form Card — overlaps header */
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7" data-testid="appointment-form">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="name" render={({ field }) => (<FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
                            <User className="w-3.5 h-3.5 text-blue-400"/>
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input className="rounded-xl border-gray-200 focus:border-blue-400" placeholder="Enter your full name" {...field} data-testid="input-name"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>)}/>
                    <FormField control={form.control} name="phone" render={({ field }) => (<FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
                            <Phone className="w-3.5 h-3.5 text-blue-400"/>
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input className="rounded-xl border-gray-200 focus:border-blue-400" placeholder="+91 9876543210" {...field} data-testid="input-phone"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>)}/>
                    <FormField control={form.control} name="email" render={({ field }) => (<FormItem className="sm:col-span-2">
                          <FormLabel className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
                            <Mail className="w-3.5 h-3.5 text-blue-400"/>
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input className="rounded-xl border-gray-200 focus:border-blue-400" type="email" placeholder="you@example.com" {...field} data-testid="input-email"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>)}/>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-100"/>

                {/* Appointment Details */}
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                    Appointment Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="doctor" render={({ field }) => (<FormItem className="sm:col-span-2">
                          <FormLabel className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
                            <Stethoscope className="w-3.5 h-3.5 text-blue-400"/>
                            Select Doctor
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-xl border-gray-200" data-testid="select-doctor">
                                <SelectValue placeholder="Choose a specialist"/>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {doctors.map((d) => (<SelectItem key={d.value} value={d.value}>
                                  {d.label}
                                </SelectItem>))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>)}/>
                    <FormField control={form.control} name="date" render={({ field }) => (<FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
                            <Calendar className="w-3.5 h-3.5 text-blue-400"/>
                            Preferred Date
                          </FormLabel>
                          <FormControl>
                            <Input className="rounded-xl border-gray-200" type="date" min={today} {...field} data-testid="input-date"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>)}/>
                    <FormField control={form.control} name="time" render={({ field }) => (<FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
                            <Clock className="w-3.5 h-3.5 text-blue-400"/>
                            Preferred Time
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-xl border-gray-200" data-testid="select-time">
                                <SelectValue placeholder="Select a time slot"/>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timeSlots.map((slot) => (<SelectItem key={slot} value={slot}>
                                  {slot}
                                </SelectItem>))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>)}/>
                    <FormField control={form.control} name="message" render={({ field }) => (<FormItem className="sm:col-span-2">
                          <FormLabel className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
                            <MessageSquare className="w-3.5 h-3.5 text-blue-400"/>
                            Message <span className="text-gray-400 font-normal text-xs">(optional)</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea className="rounded-xl border-gray-200" placeholder="Describe your symptoms or reason for visit..." rows={3} {...field} data-testid="input-message"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>)}/>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} type="button" onClick={() => setLocation("/")} className="sm:w-auto px-6 py-3.5 border border-gray-200 text-gray-600 font-semibold rounded-2xl hover:bg-gray-50 transition-colors text-sm" data-testid="cancel-btn">
                    Cancel
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} type="submit" className="flex-1 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-2xl transition-all shadow-md shadow-blue-200 text-sm" data-testid="submit-appointment-btn">
                    Confirm Appointment
                  </motion.button>
                </div>
              </form>
            </Form>
          </motion.div>
        )}

        {/* Emergency notice — always shown */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-5 bg-red-50 border border-red-100 rounded-2xl p-4 flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0 animate-pulse"/>
          <p className="text-sm text-red-700">
            <span className="font-bold">Medical Emergency?</span> Do not use this form. Call immediately:{" "}
            <a href="tel:+91 8866626129" className="font-bold underline">+91 8866626129</a> (24/7)
          </p>
        </motion.div>
      </div>
    </div>);
}