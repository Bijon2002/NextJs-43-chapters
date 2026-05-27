What is NEXT Js?



*React framework*

*Create fast web applications.*

*Solves common features such as routing, typescript etc.*



\-----------------------------------------------------------------------------------------------------------------



what is router??



*router: when we enter a url in browser, based on the url it shows the react component that is router*



next js have 2 types of router



*1)App Router*

*2)Pages Router*



**1) app router :**



*build for big applications, used for dynamic page application ,*



**2)Pages Router :**



*used for small applications, used for static pages web*



\------------------------------------------------------------------------------------------------------------------



\*\*Creating The Next js project

npx create-next-app@latest

npm run dev

\---

Folder structre

App folder :
app routing related files can be there

public : images , icons\*\*



\*\*-----------------------------------------------------------------------------------------------------------------------

Routing:

so every folders must have the page.js / page .tsx for routing and
now we have created the folder of about under the app folder now, the about folder name will be appear form the url and  in the about folder als must have teh page .js/pagetsx
and insde teh page.tsx  tgere can be same react components or new react componens all no issues\*\*



\*\*eg: http://localhost:3000/about
about page Bijon

\*\*\* folder name is the url

\------------------\*\*

---------------------------------------------------------------------------------------------------------------------------------------
Route Segments

eg:  http://localhost:3000/dashboard/settings
like wise the url can be seen right?

so when we create a folder called dashoboard inside the app and under the dashboard we have to create a folder called settings and inside teh settings we can create a folder called page.tsx so in that page.tsx we can enter a code and it can be displayed in the url of  localhost: 3000/dashboard/settings

-------------------------------------------------------------------------------------------------------------------------------------------
Layouts

in the ui when we use some files again again rgth? so those files we kept as separate.



so now we are going to do a layout came for dashboard and seeting so for that we have create a file called layout undersashboard folder and in here,





export default function dashboardLayout({children}) {



&#x20;   return (

&#x20;       <section className="bijon-dashboard-layout" >   

&#x20;        <nav> 

&#x20;        </nav>

&#x20;           <h1>header</h1>

&#x20;           {children}

&#x20;           <h1>footer</h1>

&#x20;     

&#x20;       </section>

&#x20;   )





}





here is teh code of layout.jsx and in here when we apply changes that affect the chlderns also 
the childerns means the folders came under the dashboard folder those are

and we also have teh root layout folder right. it also transfer teh codes to children, 



about

page.tsx

dashboard

favicon.ico

globals.css

layout.tsx

page.tsx



so the note is, when we create a layout  file, that transfter teh codes to teh children files  when created inside 

