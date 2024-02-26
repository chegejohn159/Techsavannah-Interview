import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GroupsService} from '../../groups.service';
import {MatDialog} from '@angular/material/dialog';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'mifosx-signatories-tab',
  templateUrl: './signatories-tab.component.html',
  styleUrls: ['./signatories-tab.component.scss']
})
export class SignatoriesTabComponent implements OnInit {

  /** Group Status */
  groupStatus: any;
  /** Group Roles Data */
  groupSignatoriesData: any[];
  /** Groups View Data */
  groupViewData: any;
  /** Columns to be Displayed for client members table */
  groupSignatoryColumns: string[] = ['Name', 'Client Id'];

  @ViewChild('signatoriesTable') signatoriesTableRef: MatTable<Element>;

  constructor(private route: ActivatedRoute,
              private groupsService: GroupsService,
              public dialog: MatDialog) {
    this.route.parent.data.subscribe((data: { groupViewData: any }) => {
      this.groupViewData = data.groupViewData;
      this.groupSignatoriesData = this.groupViewData.groupSignatories;
      this.groupStatus = this.groupViewData.status.value;
    });
  }

  ngOnInit(): void {
  }

}
