import { Cards2Data, Cards2DataText } from "@/constants/index";
import { CardHeader, CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";

const Cards2Kosina = ({
  title,
  data,
  text,
}: {
  title: string;
  data: Cards2Data[];
  text: Cards2DataText;
}) => {
  return (
    <div className="">
      <div className="container px-5 mx-auto py-10 md:py-16 border-b-2 space-y-10 md:space-y-20">
        <h2 className="text-4xl md:text-5xl text-center text-primary font-bold">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 text-center gap-6 md:gap-8 items-stretch">
          {data.map((item) => {
            return (
              <MotionComponent1 key={item.id}>
                <OneCard key={item.id} item={item} />;
              </MotionComponent1>
            );
          })}
        </div>
        <p className="first-letter:pl-6 text-xl md:text-3xl">{text.text}</p>
      </div>
    </div>
  );
};

export default Cards2Kosina;

const OneCard = ({ item }: { item: Cards2Data }) => {
  const IconComponent = item.icon;

  return (
    <Card className="h-full relative overflow-hidden  bg-transparent">
      <svg
        className="absolute inset-0 w-full h-full text-card"
        viewBox="0 0 256 160"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 256,0 192,160 0,160" fill="currentColor" />
      </svg>

      <CardHeader className="relative z-10"></CardHeader>
      <CardContent
        className="relative z-10 flex gap-5 items-center text-2xl md:text-3xl justify-start
      "
      >
        <div className="text-3xl md:text-4xl text-primary">
          <IconComponent className="" />
        </div>
        <p className=" text-left">{item.title}</p>
      </CardContent>
    </Card>
  );
};
