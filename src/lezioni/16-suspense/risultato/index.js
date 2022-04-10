import React, { Suspense } from "react";
import Spinner from "./components/Spinner";
const Photos = React.lazy(() => import("./components/Photos"));
const Comments = React.lazy(() => import("./components/Comments"));

const Component = () => {
  return (
    <div className='container '>
      <h2 className='text-center'>Suspense</h2>
      <Suspense
        fallback={
          <div className='mt-5'>
            <Spinner />
          </div>
        }
      >
        <Photos />
      </Suspense>
      <Suspense
        fallback={
          <div className='mt-5'>
            <Spinner />
          </div>
        }
      >
        <Comments />
      </Suspense>
    </div>
  );
};

export default Component;
