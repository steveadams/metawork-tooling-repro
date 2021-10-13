import { FC } from 'react';
import { BeakerIcon } from '@heroicons/react/outline';

const Step: FC = ({ children }) => (
  <div className="mt-2 p-3 bg-coolGray-900 bg-opacity-10 text-coolGray-700 dark:text-coolGray-100 rounded-md">
    {children}
  </div>
);

const Pre: FC = ({ children }) => (
  <pre className="inline-block rounded-md bg-coolGray-200 text-coolGray-800 font-bold px-1">
    {children}
  </pre>
);

const Example: FC = () => {
  return (
    <div className="min-h-screen pt-16 pb-12 flex flex-col">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <span className="inline-flex">
            <span className="sr-only">Metawork Repro</span>
            <BeakerIcon className="h-24 w-24 text-coolGray-700 dark:text-coolGray-300" />
          </span>
        </div>
        <div className="py-16">
          <div className="text-center">
            <h1 className="mt-2 text-4xl font-extrabold text-coolGray-800 dark:text-coolGray-50 tracking-tight sm:text-5xl">
              Hello Metawork
            </h1>

            <section className="text-left mt-8 text-coolGray-100">
              <Step>
                <p>
                  1. Make sure <Pre>mw</Pre> is running with node installed
                </p>
              </Step>
              <Step>
                <p>
                  run <Pre>yarn lint</Pre>. It should be very slow.
                </p>
              </Step>
              <Step>
                <p>
                  Disable <Pre>mw</Pre> and run <Pre>yarn lint</Pre> again. It
                  should be much faster.
                </p>
              </Step>
            </section>
          </div>
        </div>
      </main>
      <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">Test test test</nav>
      </footer>
    </div>
  );
};

export default Example;
