import Accordion from "../components/Accordion";

function AccordionPage() {
  const items=[
    {
      id:'fasfdsaf',
      label:'Can I use React',
      content: 'You can use React on any webpage'
    },
    {
      id:'dsafadsfads',
      label:'Can I use JavaScript',
      content: 'You can use React on any webpage'
    },
    {
      id:'dsfdsf',
      label:'Can I use Tailwind',
      content: 'You can use React on any webpage'
    }
  ]
  return(
    <Accordion items={items}/>
  )
} 

export default AccordionPage;
