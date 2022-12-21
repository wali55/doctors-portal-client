import React from 'react';
import quote from '../../assets/icons/quote.svg';
import poeple1 from '../../assets/images/people1.png';
import poeple2 from '../../assets/images/people2.png';
import poeple3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Wilson Harry',
            description: 'I had pain and discomfort in my teeth. With the right treatment I am able to back to my regular life. I am very happy now.',
            img: poeple1,
            location: 'Mirpur'
        },
        {
            _id: 2,
            name: 'Kate Harry',
            description: 'I had sharp pain in my wisdom tooth for 3-4 days. I quickly make an appointment. I had to remove my tooth surgically.',
            img: poeple2,
            location: 'Uttara'
        },
        {
            _id: 3,
            name: 'Jane Harries',
            description: 'I had cavity problem in my tooth. I make an appointment. They gave me a full checkup. After that they remove the cavity.',
            img: poeple3,
            location: 'Banani'
        },
    ];
    return (
        <section className="my-20">
            <div className="flex justify-between w-11/12 mx-auto">
                <div>
                    <h4 className="text-xl text-secondary font-bold">
                        Testimonials
                    </h4>
                    <h2 className="text-3xl font-semibold text-accent">What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto mt-12">
                {
                    reviews.map(review => <Review
                    keys={review.id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;