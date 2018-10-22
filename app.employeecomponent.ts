import { Component } from '@angular/core';
import {Employee} from './app.employee';

@Component({
  selector: 'emp-component',
  templateUrl: './app.employeecomponent.html'
})


export class AppEmployeeComponent
{ 
	id:number;
	name:string;
	salary:number;
	dept:string;
	id2:number;
	name2:string;
	salary2:number;
	dept2:string;
	 
	
 


	emp:Employee[]=[];
	
	
	emp.sortid():void
	{
		this.emp.sort( function(name1, name2) {
	    if ( parseInt(name1.empId) < parseInt(name2.empId) ){
	    	return -1;
	    }else if( parseInt(name1.empId) > parseInt(name2.empId) ){
	        return 1;
	    }else{
	    	return 0;	
	    }
	});
     } 
	 
	 emp.sortname():void
	{
		this.emp.sort( function(name1, name2) {
	    if ( name1.empName < name2.empName ){
	    	return -1;
	    }else if( name1.empName > name2.empName ){
	        return 1;
	    }else{
	    	return 0;	
	    }
	});
     } 
	 
	 emp.sortsalary():void
	{
		this.emp.sort( function(name1, name2) {
	    if ( parseInt(name1.empSalary) < parseInt(name2.empSalary) ){
	    	return -1;
	    }else if( parseInt(name1.empSalary) > parseInt(name2.empSalary) ){
	        return 1;
	    }else{
	    	return 0;	
	    }
	});
     } 
	 
	 emp.sortdept():void
	{
		this.emp.sort( function(name1, name2) {
	    if ( name1.empDept < name2.empDept ){
	    	return -1;
	    }else if( name1.empDept > name2.empDept ){
	        return 1;
	    }else{
	    	return 0;	
	    }
	});
     } 

	addData():void
	{
		if(this.id!=0 && this.name!=null && this.salary!=0 && this.dept!=null)
		{
				let employee:Employee={empId:this.id,empName:this.name,empSalary:this.salary,empDept:this.dept};
				this.emp.push(employee);
				this.clearAll();
		}
		else
		{
			alert("Please Insert all details");
		}
	}
	
	putData(e:Employee):void
	{
		this.id2=e.empId;
		this.name2=e.empName;
		this.salary2=e.empSalary;
		this.dept2=e.empDept;		
	}
	
	updateData():void
	{
		if(this.id2==null)
		{
			alert("Please Choose first to Update! ");
		}
		else if(this.id2==0 || this.name2==null || this.salary2==0 || this.dept2==null)
		{
				alert("All fields are required !!");
		}
		else
		{
				let obj:Employee=null;
				for(obj of this.emp)
				{
					if(obj.empId==this.id2)
					{
						break;
					}
				}
				//obj.empId=this.id2;
				obj.empName=this.name2;
				obj.empSalary=this.salary2;
				obj.empDept=this.dept2;
				this.clearAll();
		}
	}

	deleteData(obj:Employee)
	{
		this.clearAll();
		var index=this.emp.indexOf(obj);
		this.emp.splice(index,1);
	}
	clearAll():void
	{
		this.id=null;
		this.name=null;
		this.salary=null;
		this.dept=null;
		this.id2=null;
		this.name2=null;
		this.salary2=null;
		this.dept2=null;
	}
	
}
