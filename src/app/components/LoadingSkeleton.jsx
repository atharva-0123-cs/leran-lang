import classes from "./LoadingSkeleton.module.css";
import '@/app/globals.css'

const LoadingSkeleton = () => {
  return (
    <div className="flex justify-center  items-center  min-h-screen">
      <span className={classes.loader}></span>
    </div>
  );
};

export default LoadingSkeleton;
