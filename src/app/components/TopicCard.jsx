import Link from "next/link";

const TopicCard = ({ topic, langName }) => {
  return (
    <Link
      href={{
        pathname: `${langName}/${topic.id}`,
        query: { name: topic.id },
      }}
      className=""
    >
      <div className="bg-green-500 hover:bg-green-600 cursor-pointer rounded text-white font-bold p-2 text-left mt-4 mr-4">
        <h1 className=" text-2xl">{topic.title}</h1>
        <p className=" text-sm p-2 text-left">{topic.info}</p>
      </div>
    </Link>
  );
};

export default TopicCard;
