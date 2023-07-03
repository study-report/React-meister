import Chat from "@/components/Chat";
import Header from "@/components/Header";
import TextInput from "@/components/TextInput";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Chat />
      <TextInput />
    </div>
  );
}
