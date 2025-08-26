"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-background glass-effect">
      <div className="container mx-auto px-2 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center "
        >
          <h2 className="text-2xl md:text-4xl font-normal mb-6"> At HATTA, we deliver cutting-edge AI backed by years of research experience in machine learning across industry and academia, ensuring every solution is rigorous, impactful, and tailored to our clients.
</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className=" text-center"
        >
          <div className="md:px-20 mx-auto space-y-6 text-base md:text-2xl leading-tight font-normal">
            <p className="  ">
            Our approach is grounded in three pillars:
            </p>
            <div>
            <p className=" ">
            Precision by Design
            </p>
            <p className="">
            We deploy advanced topological deep learning, generative AI and computer vision models to deliver AI pipelines of exceptional accuracy. Each solution is designed to integrate seamlessly with existing workflows, while maintaining clarity, robustness, and interpretability.
            </p></div>
          
            <div>
            <p className=" ">
            Responsible Supervision
            </p>
        
            <p className=" ">
            We use all our expertise to monitor and externally oversee AI implementation within organisations, ensuring every system is safe, compliant, and effective. From evaluating operational impact to validating outcomes, we make sure AI adoption meets strategic, ethical, and practical standards.
            </p>
            </div>
            <div>
            <p className=" ">
            Driving Value and Efficiency
            </p>
            <p className=" ">
            Beyond optimisation, we focus on increasing profitability, reducing headcount, and driving operational efficiency. By combining operational intelligence with generative capabilities, we help organisations unlock new business models, enhance customer engagement, and transform decision-making.
            </p>
            </div>
            <p className=" ">
            Our experts view AI as a strategic engine, powering the future of enterprise excellence and innovation. Think big. Build with HATTA
            </p>
          </div>

        </motion.div>


      </div>
    </section>
  );
};

export default About;
