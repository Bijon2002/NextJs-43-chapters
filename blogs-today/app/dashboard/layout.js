export default function dashboardLayout({children}) {

    return (
        <section className="bijon-dashboard-layout" >   
         <nav> 
         </nav>
            <h1>header</h1>
            {children}
            <h1>footer</h1>
      
        </section>
    )


}