import EmployeeCard from '../services/EmployeeCard'
import { motion } from 'framer-motion';

const team = [
  { 
    name: 'Mr. Lyle Jonas', 
    role: 'Founder & Lead Consultant', 
    bio: '8+ years overall education experience', 
    image: '/images/IMG_6880.png'
  }
];

const MeetTheTeamSection = () => {
  return (
      <section className="py-10 lg:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-8"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Team</p>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
              Meet the Expert Behind Your Success
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, i) => (
              <EmployeeCard
                key={i} 
                name={member.name} 
                role={member.role} 
                bio={member.bio} 
                imageUrl={member.image}
                 />
            ))}
          </div>
        </div>
      </section>
  )
}

export default MeetTheTeamSection