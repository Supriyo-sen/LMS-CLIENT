import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/date-picker";

const formSchema = z.object({
  name: z.string().min(1, { message: "Course name is required" }),
  image: z.string().url({ message: "Invalid image URL" }),
  price: z.number().min(0, { message: "Price must be a positive number" }),
  discountPrice: z
    .number()
    .min(0, { message: "Discount price must be positive" }),
  oldCoursePrice: z
    .number()
    .min(0, { message: "Old course price must be positive" }),
  numberOfLessons: z
    .number()
    .min(1, { message: "Must have at least 1 lesson" }),
  duration: z.string().min(1, { message: "Duration is required" }),
  startDate: z.date({ required_error: "Start date is required" }),
  endDate: z.date({ required_error: "End date is required" }),
  teacherId: z.string().optional(),
  allowNewEnrollments: z.boolean(),
  materials: z.array(
    z.object({
      name: z.string().min(1, { message: "Material name is required" }),
      file: z.string().min(1, { message: "Material file is required" }),
    })
  ),
  liveClasses: z.array(
    z.object({
      name: z.string().min(1, { message: "Live class name is required" }),
      schedule: z.date({ required_error: "Live class schedule is required" }),
      duration: z.string().min(1, { message: "Duration is required" }),
    })
  ),
});

const AddCourse = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: "",
      price: 0,
      discountPrice: 0,
      oldCoursePrice: 0,
      numberOfLessons: 1,
      duration: "",
      startDate: new Date(),
      endDate: new Date(),
      teacherId: "",
      allowNewEnrollments: true,
      materials: [],
      liveClasses: [],
    },
  });

  const { control, handleSubmit } = form;

  const materialsFieldArray = useFieldArray({
    control,
    name: "materials",
  });

  const liveClassesFieldArray = useFieldArray({
    control,
    name: "liveClasses",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>Add Course</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter course name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter image URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter course price"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="discountPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discount Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter discount price"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="oldCoursePrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Old Course Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter old course price"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="numberOfLessons"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Lessons</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter number of lessons"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Duration</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter duration (e.g., 10 weeks)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <DatePicker
                        selected={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                      <DatePicker
                        selected={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="allowNewEnrollments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Allow New Enrollments</FormLabel>
                    <FormControl>
                      <Input type="checkbox" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Dynamic Fields: Materials */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Materials</h3>
                {materialsFieldArray.fields.map((field, index) => (
                  <div key={field.id} className="flex gap-4 mb-4">
                    <FormField
                      control={control}
                      name={`materials.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Material Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Material name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`materials.${index}.file`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Material File</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Material file link"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      variant="destructive"
                      onClick={() => materialsFieldArray.remove(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button
                  onClick={() =>
                    materialsFieldArray.append({ name: "", file: "" })
                  }
                >
                  Add Material
                </Button>
              </div>

              {/* Dynamic Fields: Live Classes */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Live Classes</h3>
                {liveClassesFieldArray.fields.map((field, index) => (
                  <div key={field.id} className="flex gap-4 mb-4">
                    <FormField
                      control={control}
                      name={`liveClasses.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Class Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Class name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`liveClasses.${index}.schedule`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Class Schedule</FormLabel>
                          <FormControl>
                            <DatePicker
                              selected={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`liveClasses.${index}.duration`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Duration</FormLabel>
                          <FormControl>
                            <Input placeholder="Duration" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      variant="destructive"
                      onClick={() => liveClassesFieldArray.remove(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button
                  onClick={() =>
                    liveClassesFieldArray.append({
                      name: "",
                      schedule: new Date(),
                      duration: "",
                    })
                  }
                >
                  Add Live Class
                </Button>
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddCourse;
