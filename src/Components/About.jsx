import React from 'react';

const About = () => {
    return (
        <div>
            <div className='text-center font-bold text-3xl'>Frequntely Asked Question </div>
           

<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">❓ 1. What materials are your bags made from?</div>
  <div className="collapse-content text-sm">💬 Our bags are crafted from high-quality materials such as premium leather, durable canvas, and eco-friendly fabrics to ensure both style and long-lasting use.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">❓ 2. Do you offer free shipping?</div>
  <div className="collapse-content text-sm">💬 Yes! We provide free shipping on all orders above [Your Price Limit], so you can enjoy our products without worrying about extra costs.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">❓ 3. Can I return or exchange a bag?
</div>
  <div className="collapse-content text-sm">💬 Absolutely. If you’re not 100% satisfied with your purchase, you can return or exchange it within 7–14 days of delivery, following our return policy.</div>
</div>
        </div>
    );
};

export default About;