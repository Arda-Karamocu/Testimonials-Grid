function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div
          className="grid grid-cols-1 lg:grid-cols-4 auto-rows-auto
        gap-5 m-8 lg:mx-32"
        >
          <div className="bg-[hsl(263,55%,52%)] lg:col-span-2 rounded-lg shadow-2xl p-8">
            <div className="flex gap-3 mb-3">
              <img
                src="src/images/image-daniel.jpg"
                alt="Daniel Clifford"
                className="rounded-full h-7 border-2 border-[hsl(264,82%,80%)] mt-1"
              />
              <div className="text-white">
                <h2 className="text-sm">Daniel Clifford</h2>
                <h3 className="text-xs">Verified Graduate</h3>
              </div>
            </div>

            <h1 className="text-white font-semibold mb-3">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </h1>
            <p className="text-white text-xs">
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </p>
          </div>
          <div className="bg-[hsl(217,19%,35%)] col-span-1 rounded-lg shadow-2xl p-8">
            <div className="flex gap-3 mb-3">
              <img
                src="src/images/image-jonathan.jpg"
                alt="Jonathan Walters"
                className="rounded-full h-7 border-2 border-white mt-1"
              />
              <div className="text-white">
                <h2 className="text-sm">Jonathan Walters</h2>
                <h3 className="text-xs">Verified Graduate</h3>
              </div>
            </div>
            <h1 className="text-white font-semibold mb-3">
              The team was very supportive and kept me motivated
            </h1>
            <p className="text-white text-xs">
              “ I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself. ”
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-2xl col-span-1 lg:row-span-2 p-8">
            <div className="flex gap-3 mb-3">
              <img
                src="src/images/image-kira.jpg"
                alt="Kira Whittle"
                className="rounded-full h-7 border-2 border-white mt-1"
              />
              <div className="">
                <h2 className="text-sm">Kira Whittle</h2>
                <h3 className="text-xs">Verified Graduate</h3>
              </div>
            </div>
            <h1 className="font-semibold mb-3">
              Such a life-changing experience. Highly recommended!
            </h1>
            <p className="text-xs">
              “ Before joining the bootcamp, I’ve never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-2xl col-span-1 row-span-1 p-8">
            <div className="flex gap-3 mb-3">
              <img
                src="src/images/image-jeanette.jpg"
                alt="Jeanette Harmon"
                className="rounded-full h-7 border-2 border-white"
              />
              <div className="">
                <h2 className="text-sm">Jeanette Harmon</h2>
                <h3 className="text-xs">Verified Graduate</h3>
              </div>
            </div>
            <h1 className="font-semibold mb-3">
              An overall wonderful and rewarding experience
            </h1>
            <p className="text-xs">
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </p>
          </div>
          <div className="bg-[hsl(219,29%,14%)] rounded-lg shadow-2xl col-span-1 lg:col-span-2 p-8 text-white">
            <div className="flex gap-3 mb-3">
              <img
                src="src/images/image-patrick.jpg"
                alt="Patrick Abrams"
                className="rounded-full h-7 border-2 border-[hsl(264,82%,80%)] mt-1"
              />
              <div>
                <h2 className="text-sm">Patrick Abrams</h2>
                <h3 className="text-xs">Verified Graduate</h3>
              </div>
            </div>
            <h1 className="font-semibold mb-3">
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </h1>
            <p className="text-xs">
              “ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of smart and amazing people. ”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
