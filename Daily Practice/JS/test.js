let arr="Maven,AJAX,Core Java,Mockito,XML,JMeter,Medicaid,Spring Data JPA,Gradle,Java,YouTube,JQuery,PowerMock,EasyMock,JIRA,Docker,Mapper,TypeScript,MVC,Mumbai,CSS,Medicare,Cassandra,Jenkins,NetBeans,STS,Spring Boot,Apache Kafka,Hibernate,SOA,Python"
let newArr= arr.split(",")
console.log(newArr.length);

let arr2="Struts,Rolls Royce,AJAX,MSBI,British,Ledger,Partner Portal,Spring MVC,Training,Travel,Job Diva,SQL,OLAP,CAS,GWT,Inventory Control,RMS,Training Delivery,SOAP,SQL Server,Power BI,Visual Studio,Time Management,Employee Self Service,HRIS,UDF,MBE,Algorithms,Spark,Badminton,Spring Boot,ATG,Intel,Offers,Stored Procedures,Multithreading"
let newArr2=arr2.split(",");
console.log(newArr2.length);


Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

let newArr3 = newArr.concat(newArr2).unique()
console.log(newArr3.length);