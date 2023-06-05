import Layout from "@/components/Layout";
import Wrapper from "@/components/TopBar/Wrapper";
import WidgetWrapper from "@/components/builder-widgets/WidgetWrapper";
import { signOut, useSession } from "next-auth/react";
import { BoxArrowRight } from "react-bootstrap-icons";
const index = () => {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>Hello, {session?.user?.name}</h2>
        <div className="flex items-center text-black gap-1 rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="userimage" className="w-6  h-6" />
                <span className="px-2">
                {session?.user?.email}
                </span>
            <button onClick={signOut}>
              <BoxArrowRight size={20} />
            </button>
        </div>
      </div>
      <Wrapper />
      <WidgetWrapper />
    </Layout>
  );
};

export default index;
