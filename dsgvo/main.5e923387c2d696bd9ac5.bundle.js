webpackJsonp([1,4],{201:function(e,t,n){"use strict";var r=n(0);n.d(t,"a",function(){return s});var a=this&&this.__decorate||function(e,t,n,r){var a,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=n(613),s=function(){function e(){}return e.prototype.createPdf=function(e,t,n,r){void 0===r&&(r=null);var a=new o({orientation:"portrait",unit:"mm"});a.setFontSize(14),a.text(t.titleText,20,100),a.setFontSize(12),a.text(this.getDate(),170,110),a.text(a.splitTextToSize(n,40),140,20),a.setLineWidth(180),a.setFontSize(12);var i=e.companyName+"\n"+(e.companyAddress?e.companyAddress:"")+"\n"+(e.companyZip?e.companyZip+" ":"")+(e.companyCity?e.companyCity:"")+"\n"+(e.companyCountry?e.companyCountry:"");a.text(i,20,60),r||(r=t.rawText?t.rawText:this.generateText(e,t,n));for(var s=a.splitTextToSize(r,170),c=120,l=0,d=s;l<d.length;l++){var u=d[l];a.text(u,20,c),c+=5,c>270&&(a.addPage(),c=20)}var m=e.companyName.replace(/[^A-Za-z0-9]/,"_");a.save(m+".pdf")},e.prototype.generateText=function(e,t,n){var r=this.getFirstLine(n),a="";e.contractNumber&&(a+="Betreff: "+e.contractNumber+"\n\n"),a+=t.introText;for(var i=0,o=t.textblocks;i<o.length;i++){var s=o[i];!0===s.selected&&(a+=" - "+s.content+"\n")}return",\n"===a.substr(a.length-2)&&(a=a.substr(0,a.length-2)+".\n"),e.remarks&&(a+="\n\n"+e.remarks+"\n"),a+=t.endClause+"\n\n\n",a+=r},e.prototype.getFirstLine=function(e){return e.split("\n")[0]},e.prototype.getDate=function(){var e=new Date,t=e.getDate().toString(),n=(e.getMonth()+1).toString(),r=e.getFullYear();return parseInt(t,10)<10&&(t="0"+t),parseInt(n,10)<10&&(n="0"+n),t+"."+n+"."+r},e=a([n.i(r.c)(),i("design:paramtypes",[])],e)}()},303:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(){function e(){this.letter=[]}return e}()},346:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=346},347:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(436),a=n(0),i=n(459),o=n(457);i.a.production&&n.i(a.a)(),n.i(r.a)().bootstrapModule(o.a)},456:function(e,t,n){"use strict";var r=n(0),a=n(303),i=n(201),o=n(461);n.d(t,"a",function(){return l});var s=this&&this.__decorate||function(e,t,n,r){var a,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e){this.letterService=e,this.sender="",this.templateName="",this.templateNames=[],this.companyList=[],this.currentCompany=new a.a;var t=window.localStorage.getItem("companyList");null!==t&&(this.companyList=JSON.parse(t));var n=window.localStorage.getItem("sender");null!==n&&(this.sender=n);for(var r=new o.a,i=0,s=r.Templates;i<s.length;i++){var c=s[i];this.templateNames.push(c.name)}this.letter=r.Templates[0],this.templateName=this.letter.name,console.log(this.letter)}return e.prototype.changeTemplate=function(){this.letter=this.getTemplate(this.templateName)},e.prototype.getTemplate=function(e){for(var t=new o.a,n=0,r=t.Templates;n<r.length;n++){var a=r[n];if(a.name===e)return a}return null},e.prototype.getDate=function(){return this.letterService.getDate()},e.prototype.saveCompany=function(){for(var e=null,t=0,n=this.companyList;t<n.length;t++){var r=n[t];r.companyName===this.currentCompany.companyName&&(e=r)}if(null!==e)e.letter.push(JSON.parse(JSON.stringify(this.letter)));else{var i=JSON.parse(JSON.stringify(this.currentCompany));i.letter.push(this.letter),this.companyList.push(JSON.parse(JSON.stringify(i)))}this.saveCompanyList(),this.currentCompany=new a.a;for(var o=0,s=this.letter.textblocks;o<s.length;o++){s[o].selected=!0}},e.prototype.saveSender=function(){window.localStorage.setItem("sender",this.sender)},e.prototype.printPdf=function(e,t){this.letterService.createPdf(e,t,this.sender),t.printed=this.getDate(),this.saveCompanyList()},e.prototype.saveCompanyList=function(){window.localStorage.setItem("companyList",JSON.stringify(this.companyList))},e.prototype.createLetter=function(e){this.currentCompany=e,this.letter=(new o.a).Templates[0],this.templateName=this.letter.name},e.prototype.editCompany=function(e,t){for(var n=[],r=0,a=e.letter;r<a.length;r++){var i=a[r];i!==t&&n.push(i)}if(e.letter=n,this.currentCompany=e,this.letter=t,0===e.letter.length){for(var o=[],s=0,c=this.companyList;s<c.length;s++){var l=c[s];l.companyName!==e.companyName&&o.push(l)}this.companyList=o,this.saveCompanyList()}},e=s([n.i(r.U)({selector:"app-root",template:n(616),styles:[n(614)]}),c("design:paramtypes",["function"==typeof(t=void 0!==i.a&&i.a)&&t||Object])],e);var t}()},457:function(e,t,n){"use strict";var r=n(193),a=n(0),i=n(426),o=n(432),s=n(201),c=n(456),l=n(458);n.d(t,"a",function(){return m});var d=this&&this.__decorate||function(e,t,n,r){var a,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(){function e(){}return e=d([n.i(a.b)({declarations:[c.a,l.a],imports:[r.a,i.a,o.a],providers:[s.a],bootstrap:[c.a]}),u("design:paramtypes",[])],e)}()},458:function(e,t,n){"use strict";var r=n(0),a=n(460),i=n(201),o=n(303);n.d(t,"a",function(){return l});var s=this&&this.__decorate||function(e,t,n,r){var a,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e){this.letterService=e,this.sender="",this.templateName="",this.templateNames=[],this.companyList=[],this.currentCompany=new o.a}return e.prototype.ngOnInit=function(){},e.prototype.saveCompany=function(){for(var e=null,t=0,n=this.companyList;t<n.length;t++){var r=n[t];r.companyName===this.currentCompany.companyName&&(e=r)}if(null!==e)e.letter.push(JSON.parse(JSON.stringify(this.letter)));else{var a=JSON.parse(JSON.stringify(this.currentCompany));a.letter.push(this.letter),this.companyList.push(JSON.parse(JSON.stringify(a)))}this.saveCompanyList(),this.currentCompany=new o.a;for(var i=0,s=this.letter.textblocks;i<s.length;i++){s[i].selected=!0}this.letter.rawText=""},e.prototype.editText=function(){var e=this.letterService.generateText(this.currentCompany,this.letter,this.sender);this.letter.rawText=e},e.prototype.saveCompanyList=function(){window.localStorage.setItem("companyList",JSON.stringify(this.companyList))},e.prototype.getDate=function(){return this.letterService.getDate()},s([n.i(r.w)(),c("design:type",Object)],e.prototype,"sender",void 0),s([n.i(r.w)(),c("design:type",Object)],e.prototype,"templateName",void 0),s([n.i(r.w)(),c("design:type",Array)],e.prototype,"templateNames",void 0),s([n.i(r.w)(),c("design:type","function"==typeof(t=void 0!==a.a&&a.a)&&t||Object)],e.prototype,"letter",void 0),s([n.i(r.w)(),c("design:type",Array)],e.prototype,"companyList",void 0),s([n.i(r.w)(),c("design:type","function"==typeof(l=void 0!==o.a&&o.a)&&l||Object)],e.prototype,"currentCompany",void 0),e=s([n.i(r.U)({selector:"app-form",template:n(617),styles:[n(615)]}),c("design:paramtypes",["function"==typeof(d=void 0!==i.a&&i.a)&&d||Object])],e);var t,l,d}()},459:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={production:!0}},460:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(){function e(){this.rawText=""}return e}()},461:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(){function e(){this.Templates=[{name:"DSGVO-Auskunft",titleText:"Datenschutzrechliche Selbstauskunft gemäß DSGVO",introText:"Sehr geehrte Damen und Herren,\n\nhiermit mache ich mein Recht aus Art. 15 Abs. 1 DSGVO geltend. Hierfür bitte ich um Bestätigung, ob mich betreffende personenbezogene Daten von Ihnen verarbeitet werden. (vgl. Art. 4 Nr. 1 und 2 DSGVO). Sofern dies der Fall ist, beantrage ich weiterhin die Erteilung einer Auskunft.\n\nBitte stellen Sie sicher, dass die Auskunft insbesondere folgende Informationen enthält:\n",endClause:"\nSollten Sie meine personenbezogenen Daten an ein Drittland oder an eine internationale Organisation übermittelt haben, bitte ich um Unterrichtung über geeignete Garantien i. S. d. Art. 46 DSGVO im Zusammenhang mit der Übermittlung.\nEbenfalls eingeschlossen von meiner Anfrage ist der Antrag auf Erhalt einer vollständigen Kopie meiner Daten, die Gegenstand der Verarbeitung sind (vgl. Art. 15 Abs. 1 S. 1 DSGVO). \nIch bitte Sie, mir die betreffenden personenbezogenen Daten, die ich Ihnen zur Verfügung gestellt habe, im Sinne des Art. 20 Abs. 1 DSGVO in einem strukturierten, gängigen und maschinenlesbaren Format zu übermitteln.\nDie Auskunft ist nach Art. 12 Abs. 3 DSGVO unverzüglich, in jedem Fall aber innerhalb eines Monats nach Eingang der Anfrage zu erteilen. Sie hat nach Art. 15 Abs. 3 DSGVO kostenlos zu erfolgen. \nSollten Sie meiner Anfrage nicht innerhalb der genannten Frist nachkommen, behalte ich mir vor rechtliche Schritte gegen Sie einzuleiten und Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde einzureichen (vgl. Art. 77 Abs. 1 DSGVO).\n\n\n\nMit freundlichen Grüßen,",textblocks:[{name:"text1",content:"vollständige Auskunft über personenbezogene Daten, die verarbeitet und gespeichert werden",selected:!0},{name:"text2",content:"der Zweck der Verarbeitung der Daten (lit. a)",selected:!0},{name:"text3",content:"die Kategorien personenbezogener Daten, die verarbeitet werden (lit. b)",selected:!0},{name:"text4",content:"die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden (lit. c)",selected:!0},{name:"text5",content:"die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer (lit. d)",selected:!0},{name:"text6",content:"wenn die personenbezogenen Daten nicht bei mir erhoben wurden, alle verfügbaren Informationen über die Herkunft der Daten (lit. g)",selected:!0},{name:"text7",content:"falls zutreffend, das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und - sofern gegeben - aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung meine Person. (lit. h)",selected:!0}]},{name:"DSGVO-Beanstandung",titleText:"Beanstandung Ihrer Antwort auf das DSGVO-Auskunftsersuchen",introText:"Sehr geehrte Damen und Herren,\n\nIhre Antwort auf meine Anfrage war fehlerhaft. Bitte korrigieren Sie Ihre Angaben umgehend,Ansonsten sehe ich mich gezwungen Sie der zuständigen Aufsichtsbehörde zu melden sowie dieAnsprüche gerichtlich durchzusetzen.\n\nFehlerhaft oder unvollständig waren insbesondere folgende Angaben:\n",endClause:"\n\n\nMit freundlichen Grüßen,",textblocks:[{name:"return1",content:"Es fehlten Konto- bzw. Abrechnungsdaten.",selected:!0},{name:"return2",content:"Es fehlten Daten über mein Kaufverhalten.",selected:!0},{name:"return3",content:"Es fehlten Nutzungsprotokolle.",selected:!0},{name:"return4",content:"Es fehlten Zutrittsprotokolle.",selected:!0},{name:"return5",content:"Es fehlten Standortdaten und -verläufe.",selected:!0},{name:"return6",content:"Es fehlten Datenbankeinträge.",selected:!0},{name:"return7",content:"Es fehlten technische Daten.",selected:!0},{name:"return8",content:"Es fehlten interne Notizen und Aufzeichnungen.",selected:!0}]},{name:"Unber. Anfrage Ausweiskopie",titleText:"Unberechtigt angeforderte Ausweiskopie",introText:"Sehr geehrte Damen und Herren,\n\nkürzlich haben Sie weitere Informationen zur eindeutigen Identifikation meiner Person angefragt. Ihnen liegen bereits Informationen zu meiner Identität vor. Daher fordere ich Sie auf, unverzüglich das von mir beantragte Auskunftsersuchen, sowie dem ggf. gestellten Antrag auf Herausgabe einer Datenkopie nachzukommen. Sollte dies aufgrund der vorhandenen Informationen zu meiner Person nicht möglich sein, bitte ich um weitergehende Begründung, weshalb die von Ihnen angefragten Identifikationsmittel für eine Bearbeitung meiner Anfrage notwendig sind (vgl. ErwGr 64 DSGVO). Sollten Sie Ihre Einschätzung auf Grundlage einer Risikoprognose treffen, bitte ich weiterhin um Erläuterung der verwendeten Kriterien für eine Risikoeinschätzung.",endClause:"\n\n\nMit freundlichen Grüßen,",textblocks:[]},{name:"Verweis auf Kundenportal",titleText:"Verweis auf Entnahmemöglichkeit aus dem Kundenportal",introText:"Sehr geehrte Damen und Herren,\n\nhiermit nehme ich Bezug auf Ihren Verweis auf die Verfügbarkeit der Daten im Kundenportal. Ich möchte Sie freundlich darauf hinweisen, dass dies gegen die Anforderungen, die Art. 15 Abs. 1 DSGVO an die Beantwortung eines Auskunftsersuchens gegen Art. 12 Abs. 2 S. 1 DSGVO verstößt. Hiernach ist dem Betroffenen die Wahrnehmung seiner Rechte zu erleichtern. Durch die Notwendigkeit des eigenhändigen Zusammenstellens der gewünschten Informationen ist dies vorliegend nicht gewährleistet. Daher bitte ich Sie erneut, umgehend dem von mir beantragten Auskunftsersuchen in datenschutzkonformer Weise nachzukommen.",endClause:"\n\n\nMit freundlichen Grüßen,",textblocks:[]}]}return e}()},614:function(e,t){e.exports=""},615:function(e,t){e.exports=""},616:function(e,t){e.exports='<nav class="navbar navbar-dark bg-dark flex-md-nowrap shadow">\n  <span class="navbar-brand col-sm-3 col-md-2 mr-0">DSGVO-Generator</span>\n  <ul class="navbar-nav px-3">\n    <li class="nav-item text-nowrap">\n      <a class="nav-link" href="https://github.com/adiehl/hdgdldsgvo/blob/master/INFO.md" target="_blank">\n        Datenschutzerklärung, Rechtliche Hinweise und Infos</a>\n    </li>\n  </ul>\n</nav>\n<div class="container mt-3">\n\n  <div class="row">\n    \x3c!-- Firmenliste --\x3e\n\n    <div class="col-md-4 order-md-2 mb-4 sidebar bg-light d-md-block d-none">\n      <h4 class="d-flex justify-content-between align-items-center mb-3">\n        Vorlage\n      </h4>\n      <select class="form-control mb-3" [(ngModel)]="templateName" (change)="changeTemplate()">\n        <option *ngFor="let templateName of templateNames" value="{{templateName}}">{{templateName}}</option>\n      </select>\n      <ng-container *ngIf="companyList.length">\n        <h4 class="d-flex justify-content-between align-items-center mb-3">\n          Firmenliste\n          <span class="badge badge-success badge-pill">{{companyList.length}}</span>\n        </h4>\n\n        <ul class="list-group list-group-flush" *ngFor="let company of companyList">\n          <li class="list-group-item">\n            <div>\n              <h5>{{company.companyName}} <span class="badge badge-success float-right ml-1" (click)="createLetter(company)">Neu</span></h5>\n\n\n            </div>\n            <div class="clear" style="clear: both;"></div>\n            <div *ngFor="let letter of company.letter">\n              {{letter.name}}\n              <span class="badge badge-danger float-right ml-1" (click)="editCompany(company, letter)">Edit</span>\n              <span *ngIf=\'letter.printed === undefined\' class="badge badge-secondary float-right" (click)="printPdf(company, letter)">PDF</span>\n              <span *ngIf=\'letter.printed !== undefined\' class="badge badge-success float-right" (click)="printPdf(company, letter)">PDF</span>\n            </div>\n          </li>\n        </ul>\n\n        \x3c!--<form class="p-2 mb-3">--\x3e\n          \x3c!--<button type="submit" class="btn btn-primary">Drucken</button>--\x3e\n        \x3c!--</form>--\x3e\n      </ng-container>\n      <h4 class="d-flex justify-content-between align-items-center mb-3 mt-2">\n        Absender\n      </h4>\n      <textarea rows="6" (change)="saveSender()" [(ngModel)]="sender" class="form-control"></textarea>\n      \x3c!--<h4 class="d-flex justify-content-between align-items-center mb-3">--\x3e\n        \x3c!--<span class="text-muted">Archiv</span>--\x3e\n        \x3c!--<span class="badge badge-secondary badge-pill">{{companyList.length}}</span>--\x3e\n      \x3c!--</h4>--\x3e\n\n      \x3c!--<ul class="list-group">--\x3e\n        \x3c!--<li class="list-group-item" *ngFor="let company of companyList"><h5>{{company.companyName}}</h5></li>--\x3e\n      \x3c!--</ul>--\x3e\n\n    </div>\n\n    \x3c!-- Details --\x3e\n    <main role="main" class="col-md-8 order-md-1">\n      <app-form [(sender)]="sender" [(templateName)]="templateName" [(templateNames)]="templateNames" [(letter)]="letter" [(companyList)]="companyList" [(currentCompany)]="currentCompany"></app-form>\n    </main>\n  </div>\n\n\n</div>\n'},617:function(e,t){e.exports='  <h4 class="mb-3">Firma</h4>\n  <form class="needs-validation" novalidate>\n    <div class="mb-3">\n      <label for="companyName">Firmenname</label>\n      <input [(ngModel)]="currentCompany.companyName" name="companyName" type="text" class="form-control" id="companyName" placeholder="" value="" required>\n      <div class="invalid-feedback">\n        Firmenname muss angegeben werden\n      </div>\n    </div>\n\n    <div class="mb-3">\n      <label for="companyAddress">Straße / Postfach</label>\n      <input [(ngModel)]="currentCompany.companyAddress" name="companyAddress"  type="text" class="form-control" id="companyAddress" placeholder="" value="" required>\n      <div class="invalid-feedback">\n        Anchrift erforderlich\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col-md-3 mb-3">\n        <label for="companyZip">PLZ</label>\n        <input [(ngModel)]="currentCompany.companyZip" name="companyZip"  type="text" class="form-control" id="companyZip" placeholder="" value="" required>\n        <div class="invalid-feedback">\n          PLZ erforderlich\n        </div>\n      </div>\n      <div class="col-md-9 mb-3">\n        <label for="companyCity">Ort</label>\n        <input [(ngModel)]="currentCompany.companyCity" name="companyCity"  type="text" class="form-control" id="companyCity" placeholder="" value="" required>\n        <div class="invalid-feedback">\n          Ort erforderlich\n        </div>\n      </div>\n    </div>\n\n    <div class="mb-3">\n      <label for="companyCountry">Land (nur bei Ausland)</label>\n      <input [(ngModel)]="currentCompany.companyCountry" name="companyCountry"  type="text" class="form-control" id="companyCountry" placeholder="" value="">\n    </div>\n    <div class="mb-3">\n      <label for="contractNumber">Vertragsnummer, Geschäftszeichen, Kennzeichen (Optional)</label>\n      <input [(ngModel)]="currentCompany.contractNumber" name="contractNumber"  type="text" class="form-control" id="contractNumber" placeholder="Telefonnummer, Vertragsnummer, Aktenzeichen, etc." value="">\n\n    </div>\n\n\n    <div class="mb-3">\n      <label for="remarks">Weitere Bemerkungen (optional)</label>\n      <textarea [(ngModel)]="currentCompany.remarks" name="remarks"  class="form-control" id="remarks" placeholder="z. B. bezug auf ein vorheriges Schreiben, präzisierung des Auskunftsersuchens"></textarea>\n\n    </div>\n\n    <hr class="mb-4">\n    <h4 class="mb-3">{{letter.titleText}}</h4>\n    <span [hidden]="letter.rawText">\n      <div class="float-right">{{getDate()}}</div><br />\n      <p *ngIf="currentCompany.contractNumber">Betreff: {{currentCompany.contractNumber}}</p>\n\n      <p>{{letter.introText}}</p>\n\n      <div class="custom-control custom-checkbox" *ngFor="let textblock of letter.textblocks">\n        <input [(ngModel)]="textblock.selected" name="{{textblock.name}}" type="checkbox" class="custom-control-input" id="{{textblock.name}}">\n        <label class="custom-control-label" for="{{textblock.name}}">{{textblock.content}}</label>\n      </div>\n\n      <p>{{letter.endClause}}</p>\n    </span>\n    <span [hidden]="!letter.rawText">\n      <textarea [(ngModel)]="letter.rawText" name="rawText"  class="form-control" id="rawText" style="height: 25em;"></textarea>\n    </span>\n\n    <hr class="mb-4">\n    <div class="container">\n      <div class="row">\n        <div class="col-sm"><button (click)="saveCompany()" class="btn btn-primary btn-lg btn-block" type="submit">Eintrag speichern</button></div>\n        <div class="col-sm"><button (click)="editText()" class="btn btn-secondary btn-lg btn-block" type="submit">Text bearbeiten</button></div>\n      </div>\n    </div>\n\n  </form>\n'},634:function(e,t,n){e.exports=n(347)}},[634]);