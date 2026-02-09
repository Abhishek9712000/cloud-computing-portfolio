export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-2 glass rounded-full text-cyber-purple text-sm font-semibold uppercase tracking-wider mb-4">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Building Defense Through Practice
          </h2>
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-8 md:p-12 reveal">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I am a{" "}
              <span className="text-cyber-green font-semibold">
                Cloud Computing Student
              </span>{" "}
              With a strong foundation in computer networks, cloud computing basics, 
              and system configuration. My learning approach emphasizes hands-on practice—understanding 
              how cloud services work, why architectures are designed, and how to deploy, monitor, and 
              troubleshoot them efficiently.
            </p>

            <p>
              I actively practice hands-on learning through platforms like{" "}
              <span className="text-cyber-cyan font-semibold">AWS</span>{" "}
              and work on projects that strengthen my understanding of real-world cloud environments.
              From deploying and managing cloud resources to implementing basic security and monitoring,
              I am building the technical foundation needed for modern cloud operations.

            </p>

          <p>
             My goal is to start my career as a{" "}
            <span className="text-cyber-green font-semibold">
            Cloud Engineer
            </span>{" "}
            or{" "}
           <span className="text-cyber-green font-semibold">
           Cloud Support Associate
           </span>{" "}
           and grow through continuous learning and real-world infrastructure exposure.
           I believe effective cloud solutions come from understanding architecture,
           performance, and security together, and I am committed to building reliable,
           scalable, and secure cloud environments.
          </p>

          </div>
        </div>
      </div>
    </section>
  );
}
