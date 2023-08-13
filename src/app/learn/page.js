import LangCart from "../components/LangCard";
import Learn from "../components/Learn";
const LearnPage = () => {
  return (
    <>
      <div className="flex flex-col gap-4 m-4 ">
        <Learn />
        <div className="flex flex-col gap-4 m-4">
          <LangCart
            title="C++"
            detail=" C++ is a versatile and powerful programming language that combines
          features from the C programming language and introduces several
          additional features for easier and more organized development of complex
          software systems"
            link="learn/cpp"
          />
          <LangCart
            title="javascrpit"
            detail="Javascript is a versatile programming language primarily used for web development,
              although it can also be utilized in other contexts like server-side scripting and desktop applications through frameworks like Node.js.
              It allows developers to add interactivity,
              manipulate the Document Object Model (DOM), handle events, and create dynamic content on web pages."
            link="learn/javascrpit"
          />
        </div>
      </div>
    </>
  );
};

export default LearnPage;
