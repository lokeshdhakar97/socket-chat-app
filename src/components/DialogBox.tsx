import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

export const DialogBox = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"} className="mt-8">
          Add Chat or Join Room
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Type Chat ID </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          Chat ID
          <Input
            id="chatid"
            placeholder="Example yourname12"
            className="col-span-3"
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button">Chat</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// <Dialog>
//   <DialogTrigger asChild>
//     <Button variant={"default"} className="mt-8">
//       Add Chat or Join Room
//     </Button>
//   </DialogTrigger>
//   <DialogContent className="sm:max-w-[425px]">
//     <DialogHeader>
//       <DialogTitle>Create Your Unique Chat Identity.</DialogTitle>
//       <DialogDescription>
//         Your Chat ID is your passport to conversations. Let's create one
//         that speaks volumes.
//         <br />
//         <span className="text-red-500">Can't change it later.</span>
//       </DialogDescription>
//     </DialogHeader>
//     <div className="grid grid-cols-4 items-center gap-4">
//       Chat ID
//       <Input
//         id="chatid"
//         placeholder="Example yourname12"
//         className="col-span-3"
//       />
//     </div>
//     <DialogFooter>
//       <DialogClose asChild>
//         <Button type="button">Save Chat ID</Button>
//       </DialogClose>
//     </DialogFooter>
//   </DialogContent>
// </Dialog>;
