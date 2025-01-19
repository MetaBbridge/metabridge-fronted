import { link } from "fs";
import { z } from "zod";

export const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  email: z.string().email("Invalid email address"),
  website: z.string().url("Invalid website URL"),
  phoneNumber: z.string().min(10, "Invalid phone number"),
  category: z.string().min(1, "Please select a category"),
  locationAddress: z.string().min(1, "Location address is required"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  problemStatement: z
    .string()
    .min(50, "Problem statement must be at least 50 characters"),
  projectStory: z
    .string()
    .min(100, "Project story must be at least 100 characters"),
  landscapeCover: z.any().optional(),
  portraitCover: z.any().optional(),
  logoIcon: z.any().optional(),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  twitter: z.string().optional(),
  telegram: z.string().optional(),
  documents: z.array(
    z.object({
      businessRegistration: z.any(),
      companyLicense: z.any().optional(),
      businessModel: z.any(),
      financialStatement: z.any(),
      roadmap: z.any(),
      PitchDeck: z.any(),
    }),
  ),
  milestones: z
    .array(
      z.object({
        title: z.string().min(1, "Title is required"),
        description: z.string().min(1, "Description is required"),
        startDate: z.string().min(1, "Start date is required"),
        endDate: z.string().min(1, "End date is required"),
        funding: z.string().min(1, "Funding amount is required"),
        kpis: z.string().min(1, "KPIs are required"),
        roi: z.string().min(1, "Projected ROI is required"),
      }),
    )
    .min(1, "At least one milestone is required"),
  teamMembers: z
    .array(
      z.object({
        fullName: z.string().min(1, "Full Name is required"),
        email: z.string().min(1, "Email is required"),
        phoneNumber: z.string().min(1, "Phone Number is required"),
        country: z.string().min(1, "Country is required"),
        state: z.string().min(1, "State is required"),
        city: z.string().min(1, "City is required"),
        locationAddress: z.string().min(1, "Address is required"),
        role: z.string().min(1, "Role is required"),
        linkedin: z.string().min(1, "Linkedin is required"),
        twitter: z.string().min(1, "Twitter is required"),
        telegram: z.string().min(1, "Telegram is required"),
        github: z.string().min(1, "Github is required"),
        photo: z.any(),
        identification: z.any(),
      }),
    )
    .min(1, "At least one milestone is required"),
  totalEquity: z.string().min(1, "Total equity is required"),
  distributedEquity: z.string().min(1, "Distributed equity is required"),
  equityShareOffered: z.string().min(1, "Equity share offered is required"),

  equityAllocationHolders: z
    .array(
      z.object({
        equityAllocation: z.string().min(1, "Equity Allocation is required"),
        totalEquityAllocated: z
          .string()
          .min(1, "Total Equity Allocated is required"),
        percentageAllocation: z
          .string()
          .min(1, "Percentage Allocation is required"),
      }),
    )
    .min(1, "At least one milestone is required"),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});
export type FormData = z.infer<typeof formSchema>;
