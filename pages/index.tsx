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
                  2. Make some changes to this code and stage the changes with
                  git: <Pre>git add .</Pre>
                </p>
              </Step>
              <Step>
                <p>
                  3. Commit the changes:{' '}
                  <Pre>git commit -m &quot;Import changes&quot;</Pre>
                </p>
                <br />
                <p>
                  There should be a significant delay before there&apos;s any
                  output from the command. Optionally, try pushing code -
                  tooling will run before git executes. This tooling should also
                  be very slow with <Pre>mw</Pre> running.
                </p>
              </Step>
              <Step>
                <p>
                  4. Repeat with <Pre>mw</Pre> turned off (or uninstalled, in my
                  case). There should be no significant delay after comitting or
                  pushing.
                </p>
              </Step>
            </section>
          </div>
        </div>
      </main>
      <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4"></nav>
      </footer>
    </div>
  );
};

export default Example;
