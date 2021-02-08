export function Main(parentElement){
  return{
    parent: document.querySelector(parentElement) ,
    render() {
      const html=`
      <h1>ESTAS EN MAIN</h1>
      `;
      this.parent.innerHTML = html;
    }
  }
}