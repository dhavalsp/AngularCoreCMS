import { PageService } from './../../services/page.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-edit-page',
  templateUrl: './admin-edit-page.component.html',
  styleUrls: ['./admin-edit-page.component.css']
})
export class AdminEditPageComponent implements OnInit {

  page: any;
  title: string;
  content: string;
  id: string;
  successMsg: boolean = false;
  errorMsg: boolean = false;
  param: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = params['id'];
      this.pageService.getEditPage(this.param).subscribe(page => {
        this.page = page;
        this.title = page['title'];
        this.content = page['content'];
        this.id = page['id'];
      })
    })
  }

  editPage({value, valid}){
    if(valid){
      this.pageService.putEditPage(value).subscribe(res => {
        if(res == 'pageExists'){
          this.errorMsg = true;
          setTimeout(function() {
            this.errorMsg = false;
          }.bind(this), 2000);
        }else{
          this.successMsg = true;
          setTimeout(function() {
            this.successMsg = false;
          }.bind(this), 2000);

          this.pageService.getPages().subscribe(pages => {
            this.pageService.pagesBS.next(pages);
          });
        }
      });
    }else{
      console.log('Form is not valid.');
    }
  }

}
