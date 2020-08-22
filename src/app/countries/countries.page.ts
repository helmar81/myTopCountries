import { Component, ViewEncapsulation } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';




@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  encapsulation: ViewEncapsulation.None
})
// tslint:disable-next-line: component-class-suffix
export class CountriesPage {
  todo = [



{url: 'https://www.countryflags.io/af/shiny/64.png', name: 'Afghanistan' },
{url: 'https://www.countryflags.io/ag/shiny/64.png', name: 'Antigua ' },
{url: 'https://www.countryflags.io/ai/shiny/64.png', name: 'Albania' },
{url: 'https://www.countryflags.io/am/shiny/64.png', name: 'Armenia' },
{url: 'https://www.countryflags.io/an/shiny/64.png', name: 'Netherlands Antilles' },
{url: 'https://www.countryflags.io/ao/shiny/64.png', name: 'Angola' },
{url: 'https://www.countryflags.io/ar/shiny/64.png', name: 'Argentina' },
{url: 'https://www.countryflags.io/az/shiny/64.png', name: 'Azerbajan' },
{url: 'https://www.countryflags.io/ba/shiny/64.png', name: 'Bosnia ' },
{url: 'https://www.countryflags.io/bb/shiny/64.png', name: 'Barbados' },
{url: 'https://www.countryflags.io/bd/shiny/64.png', name: 'Bangladesh' },
{url: 'https://www.countryflags.io/bf/shiny/64.png', name: 'Burkina Faso' },
{url: 'https://www.countryflags.io/bh/shiny/64.png', name: 'Bahrain' },
{url: 'https://www.countryflags.io/bi/shiny/64.png', name: 'Burundi' },
{url: 'https://www.countryflags.io/bj/shiny/64.png', name: 'Benin' },
{url: 'https://www.countryflags.io/bm/shiny/64.png', name: 'Bermuda' },
{url: 'https://www.countryflags.io/bn/shiny/64.png', name: 'Brunei' },
{url: 'https://www.countryflags.io/bo/shiny/64.png', name: 'Bolivia' },
{url: 'https://www.countryflags.io/br/shiny/64.png', name: 'Brazil' },
{url: 'https://www.countryflags.io/bs/shiny/64.png', name: 'Bahamas' },
{url: 'https://www.countryflags.io/bt/shiny/64.png', name: 'Bhutan' },
{url: 'https://www.countryflags.io/bw/shiny/64.png', name: 'Botswana' },
{url: 'https://www.countryflags.io/by/shiny/64.png', name: 'Belarus' },
{url: 'https://www.countryflags.io/bz/shiny/64.png', name: 'Belize' },
{url: 'https://www.countryflags.io/ca/shiny/64.png', name: 'Canada' },
{url: 'https://www.countryflags.io/cd/shiny/64.png', name: 'Congo' },
{url: 'https://www.countryflags.io/cf/shiny/64.png', name: 'Central African' },
{url: 'https://www.countryflags.io/cg/shiny/64.png', name: 'Congo' },
{url: 'https://www.countryflags.io/ci/shiny/64.png', name: 'Côte DIvoire' },

{url: 'https://www.countryflags.io/cl/shiny/64.png', name: 'Chile' },
{url: 'https://www.countryflags.io/cr/shiny/64.png', name: 'Costa Rica' },
{url: 'https://www.countryflags.io/cu/shiny/64.png', name: 'Cuba' },
{url: 'https://www.countryflags.io/cv/shiny/64.png', name: 'Cap Verde' },
{url: 'https://www.countryflags.io/cw/shiny/64.png', name: 'Curaçao' },
{url: 'https://www.countryflags.io/dj/shiny/64.png', name: 'Djibouti' },
{url: 'https://www.countryflags.io/dm/shiny/64.png', name: 'Dominica' },
{url: 'https://www.countryflags.io/do/shiny/64.png', name: 'Dominican Republic' },
{url: 'https://www.countryflags.io/dz/shiny/64.png', name: 'Algeria' },
{url: 'https://www.countryflags.io/ec/shiny/64.png', name: 'Ecuador' },
{url: 'https://www.countryflags.io/ee/shiny/64.png', name: 'Estonia' },
{url: 'https://www.countryflags.io/eh/shiny/64.png', name: 'Western Sahara' },
{url: 'https://www.countryflags.io/er/shiny/64.png', name: 'Eritrea' },

{url: 'https://www.countryflags.io/fi/shiny/64.png', name: 'Finland' },
{url: 'https://www.countryflags.io/fj/shiny/64.png', name: 'Fiji' },
{url: 'https://www.countryflags.io/fk/shiny/64.png', name: 'Falkland Islands' },

{url: 'https://www.countryflags.io/fo/shiny/64.png', name: 'Faroe Islands' },
{url: 'https://www.countryflags.io/ga/shiny/64.png', name: 'Gabon' },
{url: 'https://www.countryflags.io/gd/shiny/64.png', name: 'Grenada' },
{url: 'https://www.countryflags.io/ge/shiny/64.png', name: 'Georgia' },
{url: 'https://www.countryflags.io/gf/shiny/64.png', name: 'French Guiana' },
{url: 'https://www.countryflags.io/gh/shiny/64.png', name: 'Ghana' },
{url: 'https://www.countryflags.io/gi/shiny/64.png', name: 'Gibraltar' },
{url: 'https://www.countryflags.io/gl/shiny/64.png', name: 'Greenland' },
{url: 'https://www.countryflags.io/gm/shiny/64.png', name: 'Gambia' },
{url: 'https://www.countryflags.io/gn/shiny/64.png', name: 'Guinea' },
{url: 'https://www.countryflags.io/gp/shiny/64.png', name: 'Guadeloupe' },
{url: 'https://www.countryflags.io/gq/shiny/64.png', name: 'Equatorial Guinea' },
{url: 'https://www.countryflags.io/gt/shiny/64.png', name: 'Guatemala' },
{url: 'https://www.countryflags.io/gw/shiny/64.png', name: 'Guinea-Bissau' },
{url: 'https://www.countryflags.io/gy/shiny/64.png', name: 'Guyana' },
{url: 'https://www.countryflags.io/hk/shiny/64.png', name: 'Hong Kong' },
{url: 'https://www.countryflags.io/hn/shiny/64.png', name: 'Honduras' },
{url: 'https://www.countryflags.io/ht/shiny/64.png', name: 'Haiti' },
{url: 'https://www.countryflags.io/im/shiny/64.png', name: 'Isle of Man' },
{url: 'https://www.countryflags.io/in/shiny/64.png', name: 'India' },
{url: 'https://www.countryflags.io/iq/shiny/64.png', name: 'Iraq' },
{url: 'https://www.countryflags.io/ir/shiny/64.png', name: 'Iran' },
{url: 'https://www.countryflags.io/is/shiny/64.png', name: 'Island' },
{url: 'https://www.countryflags.io/jm/shiny/64.png', name: 'Jamaica' },
{url: 'https://www.countryflags.io/jo/shiny/64.png', name: 'Jordan' },
{url: 'https://www.countryflags.io/jp/shiny/64.png', name: 'Japan' },
{url: 'https://www.countryflags.io/ke/shiny/64.png', name: 'Kenya' },
{url: 'https://www.countryflags.io/kg/shiny/64.png', name: 'Kyrgyzstan' },
{url: 'https://www.countryflags.io/ki/shiny/64.png', name: 'Kiribati' },
{url: 'https://www.countryflags.io/km/shiny/64.png', name: 'Comoros' },
{url: 'https://www.countryflags.io/kn/shiny/64.png', name: 'Saint Kitts' },
{url: 'https://www.countryflags.io/kp/shiny/64.png', name: 'North Korea' },

{url: 'https://www.countryflags.io/kw/shiny/64.png', name: 'Kuwait' },
{url: 'https://www.countryflags.io/kz/shiny/64.png', name: 'Kazakhstan' },
{url: 'https://www.countryflags.io/la/shiny/64.png', name: 'Lao' },
{url: 'https://www.countryflags.io/lb/shiny/64.png', name: 'Lebanon' },
{url: 'https://www.countryflags.io/lk/shiny/64.png', name: 'Sri Lanka' },
{url: 'https://www.countryflags.io/lr/shiny/64.png', name: 'Liberia' },
{url: 'https://www.countryflags.io/ls/shiny/64.png', name: 'Lesotho' },
{url: 'https://www.countryflags.io/lt/shiny/64.png', name: 'Lithuania' },
{url: 'https://www.countryflags.io/lv/shiny/64.png', name: 'Latvia' },
{url: 'https://www.countryflags.io/ly/shiny/64.png', name: 'Libya' },
{url: 'https://www.countryflags.io/ma/shiny/64.png', name: 'Morocco' },
{url: 'https://www.countryflags.io/md/shiny/64.png', name: 'Moldova' },
{url: 'https://www.countryflags.io/me/shiny/64.png', name: 'Montenegro' },
{url: 'https://www.countryflags.io/mg/shiny/64.png', name: 'Madagascar' },

{url: 'https://www.countryflags.io/mk/shiny/64.png', name: 'Macedonia' },
{url: 'https://www.countryflags.io/ma/shiny/64.png', name: 'Morocco' },
{url: 'https://www.countryflags.io/md/shiny/64.png', name: 'Moldova' },
{url: 'https://www.countryflags.io/me/shiny/64.png', name: 'Montenegro' },
{url: 'https://www.countryflags.io/mf/shiny/64.png', name: 'Saint Martin' },
{url: 'https://www.countryflags.io/mg/shiny/64.png', name: 'Madagascar' },
{url: 'https://www.countryflags.io/mh/shiny/64.png', name: 'Marshall Islands' },
{url: 'https://www.countryflags.io/mk/shiny/64.png', name: 'Macedonia' },
{url: 'https://www.countryflags.io/ml/shiny/64.png', name: 'Mali' },
{url: 'https://www.countryflags.io/mn/shiny/64.png', name: 'Mongolia' },
{url: 'https://www.countryflags.io/mo/shiny/64.png', name: 'Macao' },
{url: 'https://www.countryflags.io/mq/shiny/64.png', name: 'Martinique' },
{url: 'https://www.countryflags.io/mr/shiny/64.png', name: 'Mauritania' },
{url: 'https://www.countryflags.io/mu/shiny/64.png', name: 'Mauritius' },
{url: 'https://www.countryflags.io/mv/shiny/64.png', name: 'Maldives' },
{url: 'https://www.countryflags.io/mw/shiny/64.png', name: 'Malawi' },
{url: 'https://www.countryflags.io/mx/shiny/64.png', name: 'Mexico' },
{url: 'https://www.countryflags.io/mz/shiny/64.png', name: 'Mozambique' },
{url: 'https://www.countryflags.io/na/shiny/64.png', name: 'Namibia' },
{url: 'https://www.countryflags.io/ne/shiny/64.png', name: 'Niger' },
{url: 'https://www.countryflags.io/ni/shiny/64.png', name: 'Nicaragua' },
{url: 'https://www.countryflags.io/np/shiny/64.png', name: 'Nepal' },
{url: 'https://www.countryflags.io/nz/shiny/64.png', name: 'New Zealand' },
{url: 'https://www.countryflags.io/om/shiny/64.png', name: 'Oman' },
{url: 'https://www.countryflags.io/pe/shiny/64.png', name: 'Peru' },
{url: 'https://www.countryflags.io/pg/shiny/64.png', name: 'Papua New Guinea' },
{url: 'https://www.countryflags.io/ph/shiny/64.png', name: 'Philippines' },
{url: 'https://www.countryflags.io/pk/shiny/64.png', name: 'Pakistan' },
{url: 'https://www.countryflags.io/pr/shiny/64.png', name: 'Puerto Rico' },
{url: 'https://www.countryflags.io/ps/shiny/64.png', name: 'Palestine' },
{url: 'https://www.countryflags.io/py/shiny/64.png', name: 'Paraguay' },
{url: 'https://www.countryflags.io/rs/shiny/64.png', name: 'Serbia' },
{url: 'https://www.countryflags.io/rw/shiny/64.png', name: 'Rwanda' },
{url: 'https://www.countryflags.io/sa/shiny/64.png', name: 'Saudi Arabia' },
{url: 'https://www.countryflags.io/sc/shiny/64.png', name: 'Seychelles' },
{url: 'https://www.countryflags.io/sd /shiny/64.png', name: 'Sudan' },
{url: 'https://www.countryflags.io/sl/shiny/64.png', name: 'Sierra Leone' },
{url: 'https://www.countryflags.io/sn/shiny/64.png', name: 'Senegal' },
{url: 'https://www.countryflags.io/so/shiny/64.png', name: 'Somalia' },
{url: 'https://www.countryflags.io/sr/shiny/64.png', name: 'Suriname' },
{url: 'https://www.countryflags.io/ss/shiny/64.png', name: 'South Sudan' },
{url: 'https://www.countryflags.io/st/shiny/64.png', name: 'Sao Tome ' },
{url: 'https://www.countryflags.io/sv/shiny/64.png', name: 'El Salvador' },
{url: 'https://www.countryflags.io/sy/shiny/64.png', name: 'Syria' },
{url: 'https://www.countryflags.io/sz/shiny/64.png', name: 'Swaziland' },
{url: 'https://www.countryflags.io/td/shiny/64.png', name: 'Chad' },
{url: 'https://www.countryflags.io/tg/shiny/64.png', name: 'Togo' },
{url: 'https://www.countryflags.io/tj/shiny/64.png', name: 'Tajikistan' },
{url: 'https://www.countryflags.io/tm/shiny/64.png', name: 'Turkmenistan' },
{url: 'https://www.countryflags.io/to/shiny/64.png', name: 'Tonga' },
{url: 'https://www.countryflags.io/tt/shiny/64.png', name: 'TrinidadTobago' },
{url: 'https://www.countryflags.io/tv/shiny/64.png', name: 'Tuvalu' },
{url: 'https://www.countryflags.io/tz/shiny/64.png', name: 'Tanzania' },
{url: 'https://www.countryflags.io/ug/shiny/64.png', name: 'Uganda' },
{url: 'https://www.countryflags.io/uy/shiny/64.png', name: 'Uruguay' },
{url: 'https://www.countryflags.io/uz/shiny/64.png', name: 'Uzbekistan' },
{url: 'https://www.countryflags.io/va/shiny/64.png', name: 'Vatikan' },
{url: 'https://www.countryflags.io/vc/shiny/64.png', name: ' Grenadines' },
{url: 'https://www.countryflags.io/ve/shiny/64.png', name: 'Venezuela' },
{url: 'https://www.countryflags.io/vu/shiny/64.png', name: 'Vanuatu' },
{url: 'https://www.countryflags.io/ws/shiny/64.png', name: 'Samoa' },
{url: 'https://www.countryflags.io/xk/shiny/64.png', name: 'Kosovo' },
{url: 'https://www.countryflags.io/ye/shiny/64.png', name: 'Yemen' },
{url: 'https://www.countryflags.io/za/shiny/64.png', name: 'South Africa' },
{url: 'https://www.countryflags.io/zm/shiny/64.png', name: 'Zambia' },
{url: 'https://www.countryflags.io/zw/shiny/64.png', name: 'Zimbabwe' },



  ];

  done = [

    {url: 'https://www.countryflags.io/ad/shiny/64.png', name: 'Andorra' },
    {url: 'https://www.countryflags.io/ae/shiny/64.png', name: 'UAE' },
    {url: 'https://www.countryflags.io/at/shiny/64.png', name: 'Austria' },
    {url: 'https://www.countryflags.io/au/shiny/64.png', name: 'Australia' },
    {url: 'https://www.countryflags.io/aw/shiny/64.png', name: 'Aruba' },
    {url: 'https://www.countryflags.io/bg/shiny/64.png', name: 'Bulgaria' },
    {url: 'https://www.countryflags.io/ch/shiny/64.png', name: 'Switzerland' },
    {url: 'https://www.countryflags.io/cn/shiny/64.png', name: 'China' },
    {url: 'https://www.countryflags.io/cm/shiny/64.png', name: 'Cameroon' },
    {url: 'https://www.countryflags.io/co/shiny/64.png', name: 'Colombia' },
    {url: 'https://www.countryflags.io/cy/shiny/64.png', name: 'Cyprus' },
    {url: 'https://www.countryflags.io/cz/shiny/64.png', name: 'Czech Republic' },
    {url: 'https://www.countryflags.io/et/shiny/64.png', name: 'Ethiopia' },
    {url: 'https://www.countryflags.io/de/shiny/64.png', name: 'Germany' },
    {url: 'https://www.countryflags.io/dk/shiny/64.png', name: 'Denmark' },
    {url: 'https://www.countryflags.io/eg/shiny/64.png', name: 'Egypt' },
    {url: 'https://www.countryflags.io/fr/shiny/64.png', name: 'France' },
    {url: 'https://www.countryflags.io/es/shiny/64.png', name: 'Spain' },
    {url: 'https://www.countryflags.io/gb/shiny/64.png', name: 'United Kingdom' },
    {url: 'https://www.countryflags.io/gr/shiny/64.png', name: 'Greece' },
    {url: 'https://www.countryflags.io/hr/shiny/64.png', name: 'Croatia' },
    {url: 'https://www.countryflags.io/hu/shiny/64.png', name: 'Hungary' },
    {url: 'https://www.countryflags.io/id/shiny/64.png', name: 'Indonesia' },
    {url: 'https://www.countryflags.io/ie/shiny/64.png', name: 'Ireland' },
    {url: 'https://www.countryflags.io/il/shiny/64.png', name: 'Israel' },
    {url: 'https://www.countryflags.io/kh/shiny/64.png', name: 'Cambodia' },
    {url: 'https://www.countryflags.io/lu/shiny/64.png', name: 'Luxembourg' },
    {url: 'https://www.countryflags.io/lc/shiny/64.png', name: 'Saint Lucia' },
    {url: 'https://www.countryflags.io/li/shiny/64.png', name: 'Lichtenstein' },
    {url: 'https://www.countryflags.io/mc/shiny/64.png', name: 'Monaco' },
    {url: 'https://www.countryflags.io/mt/shiny/64.png', name: 'Malta' },
    {url: 'https://www.countryflags.io/my/shiny/64.png', name: 'Malaysia' },
    {url: 'https://www.countryflags.io/ng/shiny/64.png', name: 'Nigeria' },
    {url: 'https://www.countryflags.io/nl/shiny/64.png', name: 'Netherlands' },
    {url: 'https://www.countryflags.io/no/shiny/64.png', name: 'Norway' },
    {url: 'https://www.countryflags.io/pl/shiny/64.png', name: 'Poland' },
    {url: 'https://www.countryflags.io/pa/shiny/64.png', name: 'Panama' },
    {url: 'https://www.countryflags.io/pt/shiny/64.png', name: 'Portugal' },
    {url: 'https://www.countryflags.io/it/shiny/64.png', name: 'Italy' },
    {url: 'https://www.countryflags.io/se/shiny/64.png', name: 'Sweden' },
    {url: 'https://www.countryflags.io/sg/shiny/64.png', name: 'Singapore' },
    {url: 'https://www.countryflags.io/kr/shiny/64.png', name: 'Korea' },
    {url: 'https://www.countryflags.io/si/shiny/64.png', name: 'Slovenia' },
    {url: 'https://www.countryflags.io/sk/shiny/64.png', name: 'Slovakia' },
    {url: 'https://www.countryflags.io/qa/shiny/64.png', name: 'Qatar' },
    {url: 'https://www.countryflags.io/ro/shiny/64.png', name: 'Romania' },
    {url: 'https://www.countryflags.io/sm/shiny/64.png', name: 'San Marino' },
    {url: 'https://www.countryflags.io/th/shiny/64.png', name: 'Thailand' },
    {url: 'https://www.countryflags.io/ru/shiny/64.png', name: 'Russia' },
    {url: 'https://www.countryflags.io/tn/shiny/64.png', name: 'Tunisia' },
    {url: 'https://www.countryflags.io/tw/shiny/64.png', name: 'Thaiwan' },
    {url: 'https://www.countryflags.io/tr/shiny/64.png', name: 'Turkey' },
    {url: 'https://www.countryflags.io/ua/shiny/64.png', name: 'Ukraine' },
    {url: 'https://www.countryflags.io/vn/shiny/64.png', name: 'Vietnam' },
    {url: 'https://www.countryflags.io/us/shiny/64.png', name: 'USA' },

  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}