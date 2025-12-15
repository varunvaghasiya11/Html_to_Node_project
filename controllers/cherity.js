let data =[];
const indexPage = (req, res) => {
    res.render('index', { title: 'Home Page' });
};

const aboutPage = (req, res) => {
    res.render('about', { title: 'About Us' });
};

const blogPage = (req, res) => {
    res.render('blog', { title: 'Our Blog' });
};

const blogDetailsPage = (req, res) => {
    res.render('blog-details', { title: 'Blog Details' });
};

const contactPage = (req, res) => {
    res.render('contact', { title: 'Contact' });
    console.log("pagelode");
    
};

const contactPagedetail = (req,res)=>{
    console.log("pageloding");
    
    const obj = {
        message : req.body.message,
        name : req.body.name,
        email : req.body.email,
        subject : req.body.subject
    }
    data.push(obj);
    // res.json(data);
    console.log(data);
    res.redirect('/contact');
}

const elementsPage = (req, res) => {
    res.render('elements', { title: 'Elements' });
};

const programsPage = (req, res) => {
    res.render('programs', { title: 'Programs' });
};

const whoWeArePage = (req, res) => {
    res.render('who_we_are', { title: 'Who We Are' });
};

module.exports = {
    indexPage,
    aboutPage,
    blogPage,
    blogDetailsPage,
    contactPage,
    elementsPage,
    programsPage,
    whoWeArePage,
    contactPagedetail
};