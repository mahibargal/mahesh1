import { Component, OnInit } from '@angular/core';

import{NgModel}from '@angular/forms'

@Component({
  // selector: '[app-servers]',
  selector:'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="server is not created yet"
serverName='';
  constructor() { 

setTimeout(()=>{

this.allowNewServer=true;
},2000);
    
  }

  ngOnInit(): void {
  }
    OnCreateServer()
    {
      // alert("Server Is created");
      this.serverCreationStatus="server is created successfully ! and name is"+this.serverName;
    }
    onUpdateServerName(event:Event){
      // console.log(event);
      this.serverName= (<HTMLInputElement>event.target).value;
    }
  }

