import { motion } from "framer-motion";

const LoveLetterSection = () => {
  return (
    <section className="py-24 px-6 bg-sunset-gradient">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-foreground mb-12"
        >
          A Letter for My Heart 💌
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-border"
        >
          <div className="font-display text-xl md:text-2xl leading-relaxed text-foreground space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              𝐦𝐲𝐛𝐚𝐛𝐲.ꨄ♥︎
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="font-body text-base md:text-lg text-muted-foreground italic leading-relaxed"
            >
              Jab maine aapko pehli baar dekha tha, tab hi mujhe andar se feel ho gaya tha ki meri zindagi kuch alag hone wali hai. 💖Apki smile  haaaaaaaye baby , aap mere favourite bacche ho ,aur tumhara saath ye jo pal mai jee raha hoon wo meri life ka most precious gift h . ✨
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="font-body text-base md:text-lg text-muted-foreground italic leading-relaxed"
            >
              Main har sunrise aur har sunset aapke saath spend karna chahta hoon, jab tak aap ho mere sath aise memories banana chahta hoon jo lifetime tak rahein. 💕
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
            >
              Forever Yours ❤️
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
