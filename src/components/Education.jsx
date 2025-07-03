import React, { useEffect, useRef } from 'react';
import '../components/Education.css';
import { FaCircle } from 'react-icons/fa';

const
  Education = () => {
  const containerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');

            // Remove and allow re-trigger
            entry.target.addEventListener(
              'animationend',
              () => {
                entry.target.classList.remove('animate');
              },
              { once: true }
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    containerRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      containerRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      <section className="about-section" id="#about">
        <div className="about-me" style={{ marginTop: '80px' }}>
          <h1>Education</h1>
        </div>
        <div
          style={{
            gap: '70px',
            display: 'flex',
            marginTop: '-80px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <div className="timeline">
            {[
              {
                side: 'left',
                title: '10th - CBSE',
                date: '2020 - 2021',
                school: 'Podar International School',
                score: 'Percentage - 95%',
              },
              {
                side: 'right',
                title: '12th - HSC',
                date: '2021 - 2023',
                school: 'Ashok Vidyalaya Jr. College',
                score: 'Percentage - 75.67%',
              },
              {
                side: 'left',
                title: 'B.Tech - CSE AI',
                date: '2023 - 2027',
                school: 'Vishwakarma Institute of Information Technology',
                score: 'CGPA - 8.98',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`container ${item.side}-container`}
                ref={el => (containerRefs.current[index] = el)}
              >
                <FaCircle className="circle-logo" />
                <div className="text-box">
                  <h2>{item.title}</h2>
                  <small>{item.date}</small>
                  <p>{item.school}</p>
                  <h2>{item.score}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
