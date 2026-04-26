



const scrollToJob = () => {
  const element = document.querySelector(".job-post");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default  scrollToJob ;
