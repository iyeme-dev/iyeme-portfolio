import Card from "../../components/Card"

const Testimonial = ({testimonial}) => {
  return (
    <Card className="light">
        <p style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>
  {testimonial.quote}
</p>
        <div className="testimonial__client">
            <div className="testimonial__client-avatar">
                
            </div>
            <div className="testimonial__client-details">
                <h6 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{testimonial.name}</h6>
                <small>{testimonial.profession}</small>
            </div>
        </div>
    </Card>
  )
}

export default Testimonial