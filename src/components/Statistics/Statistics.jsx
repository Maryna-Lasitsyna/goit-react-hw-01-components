import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatsList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';




export const Statistics = ({ title, stats }) => {
   return (
     <Section>
       {title ? <Title>{title}</Title> : null}

       <StatsList>
         {stats.map(stat => (
           <StatItem key={stat.id} >
             <StatLabel>{stat.label}</StatLabel>
             <StatPercentage>{stat.percentage}%</StatPercentage>
           </StatItem>
         ))}
       </StatsList>
     </Section>
   );
};





Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
       id: PropTypes.string.isRequired,
       label: PropTypes.string.isRequired,
       percentage:PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;