import Wrapper from "@/core/layouts/Wrapper";
import CustomDialog from "@/core/components/CustomDialog";
import { Button } from "@/core/components/ui/button";
import { AlarmClock } from "lucide-react";

const Home = () => {
  return (
    <Wrapper.Base>
      <div>
        <h2 className="text-slate-800 font-bold text-lg">Hello my applciation</h2>
      </div>
      <Button variant="secondary">
        <AlarmClock />
        <span className="ml-2">Set wakeup time</span>
      </Button>
      <CustomDialog
        title="Welcome!"
        description="Welcome to our brand new website! please enjoy playing around here"
        body={<div>Product</div>}
        trigger={<Button>Open</Button>}
        footer={<div>footer</div>}
      />
      <div className="text-slate-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, ipsam.</div>
    </Wrapper.Base>
  );
};

export default Home;
