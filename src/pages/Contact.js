
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, Container, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Page Title */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#1C163C', mb: 2 }}>
          Get in Touch
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
          We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: 2 }}>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold', color: '#1C163C' }}>
              Contact Information
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <IconButton sx={{ bgcolor: '#f0f7ff', color: '#1767FE', mr: 2 }}>
                <LocationOnIcon />
              </IconButton>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Our Location</Typography>
                <Typography variant="body2" color="textSecondary">123 Business Avenue, Tech Park, CA 12345</Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <IconButton sx={{ bgcolor: '#f0f7ff', color: '#1767FE', mr: 2 }}>
                <PhoneIcon />
              </IconButton>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Phone Number</Typography>
                <Typography variant="body2" color="textSecondary">+1 (555) 123-4567</Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton sx={{ bgcolor: '#f0f7ff', color: '#1767FE', mr: 2 }}>
                <EmailIcon />
              </IconButton>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Email Address</Typography>
                <Typography variant="body2" color="textSecondary">info@yourcompany.com</Typography>
              </Box>
            </Box>
            
            <Box sx={{ mt: 5 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Business Hours</Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">Monday - Friday:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">9:00 AM - 6:00 PM</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">Saturday:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">10:00 AM - 4:00 PM</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">Sunday:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">Closed</Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        
        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold', color: '#1C163C' }}>
              Send us a Message
            </Typography>
            
            {submitted ? (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h6" sx={{ color: '#1767FE', mb: 2 }}>Thank you for your message!</Typography>
                <Typography variant="body1">We've received your inquiry and will get back to you shortly.</Typography>
              </Box>
            ) : (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      variant="outlined"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      variant="outlined"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      variant="outlined"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      variant="outlined"
                      required
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      sx={{ 
                        bgcolor: '#1767FE', 
                        color: 'white', 
                        py: 1.5, 
                        px: 4,
                        '&:hover': {
                          bgcolor: '#0d52d1'
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Paper>
        </Grid>
      </Grid>
      
      {/* Map Section */}
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold', color: '#1C163C', textAlign: 'center' }}>
          Our Location
        </Typography>
        <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden', height: '400px' }}>
          {/* Replace this with an actual map component if you have one */}
          <Box 
            sx={{ 
              width: '100%', 
              height: '100%', 
              bgcolor: '#f0f7ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography variant="body1" color="textSecondary">
              Map will be displayed here. Integrate with Google Maps or another map service.
            </Typography>
          </Box>
        </Paper>
      </Box>
      
      {/* FAQ Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold', color: '#1C163C', textAlign: 'center' }}>
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              question: "What services do you offer?",
              answer: "We offer a wide range of digital services including web development, mobile app development, UI/UX design, and digital marketing solutions tailored to your business needs."
            },
            {
              question: "How can I request a quote?",
              answer: "You can request a quote by filling out the contact form above, sending us an email, or calling our office directly. We'll get back to you within 24 hours with a detailed proposal."
            },
            {
              question: "Do you offer support after project completion?",
              answer: "Yes, we provide ongoing support and maintenance services to ensure your digital products continue to run smoothly and stay up-to-date."
            },
            {
              question: "What is your typical project timeline?",
              answer: "Project timelines vary depending on scope and complexity. Simple websites may take 2-4 weeks, while larger applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
            }
          ].map((faq, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#1C163C' }}>
                  {faq.question}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {faq.answer}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Contact;
