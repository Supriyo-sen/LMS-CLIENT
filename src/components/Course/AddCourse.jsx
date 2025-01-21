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
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(1, { message: "Course name is required" }),
  image: z.string().url({ message: "Invalid image URL" }),
  price: z.string().min(0, { message: "Price must be a positive number" }),
  discountPrice: z
    .string()
    .min(0, { message: "Discount price must be positive" }),
  oldCoursePrice: z
    .string()
    .min(0, { message: "Old course price must be positive" }),
  numberOfLessons: z
    .string()
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
      status: z
        .enum(["upcoming", "running", "completed"], {
          message: "Invalid status",
        })
        .default("upcoming"),
    })
  ),
  courseState: z
    .enum(["upcoming", "running", "completed"], {
      message: "Invalid status",
    })
    .default("upcoming"),
});

const AddCourse = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: "",
      price: "",
      discountPrice: "",
      oldCoursePrice: "",
      numberOfLessons: "",
      duration: "",
      startDate: new Date(),
      endDate: new Date(),
      teacherId: "",
      allowNewEnrollments: false,
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
    <Dialog className="">
      <DialogTrigger>Add Course</DialogTrigger>
      <DialogContent className="max-h-[90%] max-w-[90%] xl:max-w-[70%] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Field to add image */}
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

            {/*Field to add course name, price */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter course price"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Field to add discount price and course duration  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="discountPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discount Price</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
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
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Duration (in months)</FormLabel>
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
            </div>

            {/* Field to add old course price and number of lessons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="oldCoursePrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Old Course Price</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
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
                        type="text"
                        placeholder="Enter number of lessons"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Field to add start date, end date*/}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex gap-4 items-center justify-start space-y-0">
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
                  <FormItem className="flex gap-4 items-center justify-start space-y-0">
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
                control={control}
                name={"courseState"}
                render={({ field }) => (
                  <FormItem className="flex gap-4 items-center justify-start space-y-0">
                    <FormLabel>Course State</FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>State</SelectLabel>
                            <SelectItem value="upcoming">Upcoming</SelectItem>
                            <SelectItem value="running">Running</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Dynamic Fields: Materials */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Materials</h3>
              {materialsFieldArray.fields.map((field, index) => (
                <div
                  key={field.id}
                  className="flex flex-wrap items-end gap-4 mb-4"
                >
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
                      <FormItem className="flex justify-between items-end gap-4">
                        <div className="flex flex-col space-y-2">
                          <FormLabel>Material File</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Material file"
                              {...field}
                              type="file"
                            />
                          </FormControl>
                          <FormMessage />
                        </div>
                        {field.value && (
                          <Button
                            variant="destructive"
                            onClick={() => materialsFieldArray.remove(index)}
                          >
                            Remove
                          </Button>
                        )}
                      </FormItem>
                    )}
                  />
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
                <div
                  key={field.id}
                  className="flex items-baseline flex-wrap gap-4 mb-4"
                >
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
                      <FormItem className="flex flex-col gap-1">
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
                    name={`liveClasses.${index}.status`}
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-1">
                        <FormLabel>Class Status</FormLabel>
                        <FormControl>
                          <Select {...field}>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select a status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Status</SelectLabel>
                                <SelectItem value="upcoming">
                                  Upcoming
                                </SelectItem>
                                <SelectItem value="running">Running</SelectItem>
                                <SelectItem value="completed">
                                  Completed
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`liveClasses.${index}.duration`}
                    render={({ field }) => (
                      <FormItem className="flex justify-between items-end gap-4">
                        <div className="flex flex-col space-y-2">
                          <FormLabel>Duration</FormLabel>
                          <FormControl>
                            <Input placeholder="Duration" {...field} />
                          </FormControl>
                          <FormMessage />
                        </div>
                        {field.value && (
                          <Button
                            variant="destructive"
                            onClick={() => liveClassesFieldArray.remove(index)}
                          >
                            Remove
                          </Button>
                        )}
                      </FormItem>
                    )}
                  />
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

            <div className="flex justify-center gap-10">
              {/* Allow New enrollment */}
              <FormField
                control={form.control}
                name="allowNewEnrollments"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-4 space-y-0">
                    <FormLabel>Allow New Enrollments</FormLabel>
                    <FormControl>
                      <Checkbox className="size-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCourse;
