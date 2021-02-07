export function Main(parentElement){
  return{
    parent: document.querySelector(parentElement) ,
    render() {
      const html=`
      <hi>ESTAS EN MAIN</hi>
      `;
      this.parent.innerHTML = html;
    }
  }
}