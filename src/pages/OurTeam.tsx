import Container from '../components/ui/Container';
import meet1 from '../assets/meet1.png';
import meet2 from '../assets/meet2.png';
import meet3 from '../assets/meet3.png';
import meet4 from '../assets/meet4.png';
import { motion } from 'framer-motion';

const OurTeam = () => {
  return (
    <Container>
      <div className="mt-[60px] sm:mt-[1070px] lg:mt-[60px]">
        <div className="text-center">
          <h1 className="text-[#061C3D] font-bold text-[48px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
            Meet our <span>Team</span>
          </h1>
          <p className="text-[#566B84] text-[18px] text-wrap mt-[27px]">
            All our speakers are fully qualified and licensed. Moreover, theyare
            incredibly skillful <br /> and proficient in various aspects of
            events.
          </p>
        </div>
        <div className="flex justify-center items-center gap-[20px] mt-[60px] flex-wrap">
          <motion.img
            whileTap={{ y: -10 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeIn' }}
            src={meet1}
            className="rounded"
            alt="meet image"
          />
          <motion.img
            whileTap={{ y: -10 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeIn' }}
            src={meet2}
            className="rounded"
            alt="meet image"
          />
          <motion.img
            whileTap={{ y: -10 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeIn' }}
            src={meet3}
            className="rounded"
            alt="meet image"
          />
          <motion.img
            whileTap={{ y: -10 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeIn' }}
            src={meet4}
            className="rounded"
            alt="meet image"
          />
        </div>
      </div>
    </Container>
  );
};

export default OurTeam;
