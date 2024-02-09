import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";

const ChatIDDialog = ({ openDialogRef, closeDialogRef }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="hidden" ref={openDialogRef}>
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Your Unique Chat Identity.</DialogTitle>
          <DialogDescription>
            Your Chat ID is your passport to conversations. Let's create one
            that speaks volumes.
            <br />
            <span className="text-red-500">Can't change it later.</span>
          </DialogDescription>
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
            <Button type="button" ref={closeDialogRef}>
              Save Chat ID
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
