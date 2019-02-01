<template>
  <div id="home">
    <b-container fluid class="main-home-container padding-left-5 padding-right-5">
      <b-row class="no-margin">
        <b-col class="no-padding">
          <b-row class="no-margin">
            <b-col>
              <b-row>
                <b-col class="shadow m-1 bg-white no-padding scroll">
                  <b-nav cards>
                    <b-nav-item cards @click="type" v-b-popover.hover="'Common carbon round steel'">CCR steel</b-nav-item>
                    <b-nav-item @click="type1" v-b-popover.hover="'Rebar'">Rebar</b-nav-item>
                    <b-nav-item @click="type2" v-b-popover.hover="'Carbon structural steel'">CS steel</b-nav-item>
                    <b-nav-item @click="type8" v-b-popover.hover="'Wire Rod'">Wire Rod</b-nav-item>
                    <b-nav-item @click="type3" v-b-popover.hover="'Round Bearing steel'">RB steel</b-nav-item>
                    <b-nav-item @click="type4" v-b-popover.hover="'Cold Heading Steel'">CH steel</b-nav-item>
                    <b-nav-item @click="type5" v-b-popover.hover="'Color-Coated Steel'">CC steel</b-nav-item>
                    <b-nav-item @click="type6" v-b-popover.hover="'Galvanized steel'">Galvanized steel</b-nav-item>
                    <b-nav-item @click="type7" v-b-popover.hover="'Hot Rolled Coiled'">HRC</b-nav-item>
                  </b-nav>
                </b-col>
              </b-row>
              <b-row>
               <b-col class="no-scroll">
                 <b-col class="shadow m-1 bg-white rounded" v-if="showcommon" v-b-modal.modal1 lazy>
                    <GChart
                      type="LineChart"
                      :data="chartData"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                      />
                       <b-col class="table-scroll"> 
                         <b-card>
                          <table class="table">
                            <tr v-for="cost_Commonitem in cost_Common">
                          
                            <th v-for="item in cost_Commonitem">{{item}}</th>
                            </tr>
                          </table>
                         </b-card>
                      </b-col>
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showrebar" v-b-modal.modal2 lazy>
                     <GChart
                      type="LineChart"
                      :data="Rebar"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                    />
                    <b-col class="table-scroll"> 
                        <b-card>
                          <table class="table">
                            <tr v-for="cost_Rebaritem in cost_Rebar">
                          
                            <th v-for="item in cost_Rebaritem">{{item}}</th>
                            </tr>
                          </table>
                        </b-card>
                    </b-col>
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showcarbon" v-b-modal.modal3 lazy>
                   <GChart
                      type="LineChart"
                      :data="Carbon"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                    />
                    <b-col class="table-scroll"> 
                        <b-card>
                          <table class="table">
                            <tr v-for="cost_Carbonitem in cost_Carbon">
                          
                            <th v-for="item in cost_Carbonitem">{{item}}</th>
                            </tr>
                          </table>
                        </b-card>
                    </b-col>
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showround" v-b-modal.modal4 lazy>
                    <GChart
                      type="LineChart"
                      :data="Round"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                    />
                     <b-col class="table-scroll"> 
                        <b-card>
                          <table class="table">
                            <tr v-for="cost_Rounditem in cost_Round">
                          
                            <th v-for="item in cost_Rounditem">{{item}}</th>
                            </tr>
                          </table>
                        </b-card>
                    </b-col>
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showcold" v-b-modal.modal5 lazy>
                    <GChart
                      type="LineChart"
                      :data="Cold"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                    />
                    <b-col class="table-scroll"> 
                        <b-card>
                          <table class="table">
                            <tr v-for="cost_Colditem in cost_Cold">
                          
                            <th v-for="item in cost_Colditem">{{item}}</th>
                            </tr>
                          </table>
                        </b-card>
                    </b-col>
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showcolor" v-b-modal.modal6 lazy>
                    <GChart
                      type="LineChart"
                      :data="Color"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                    />
                    <b-col class="table-scroll"> 
                        <b-card>
                          <table class="table">
                            <tr v-for="cost_Coloritem in cost_Color">
                          
                            <th v-for="item in cost_Coloritem">{{item}}</th>
                            </tr>
                          </table>
                        </b-card>
                    </b-col>
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showGalvanized" v-b-modal.modal7 lazy>
                    <GChart
                      type="LineChart"
                      :data="Galvanish"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                    />
                    <b-col class="table-scroll"> 
                        <b-card>
                          <table class="table">
                            <tr v-for="cost_cost_Galvanisheditem in cost_Galvanished">
                          
                            <th v-for="item in cost_cost_Galvanisheditem">{{item}}</th>
                            </tr>
                          </table>
                        </b-card>
                    </b-col>
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showHRC" v-b-modal.modal8 lazy>
                    <GChart
                      type="LineChart"
                      :data="HRC"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                    />
                     <b-col class="table-scroll"> 
                         <b-card>
                          <table class="table">
                            <tr v-for="cost_HRCitem in cost_HRC">
                          
                            <th v-for="item in cost_HRCitem">{{item}}</th>
                            </tr>
                          </table>
                         </b-card>
                      </b-col>
                  </b-col>
                   <b-col class="shadow m-1 bg-white rounded" v-if="showWire" v-b-modal.modal9 lazy>
                    <GChart
                      type="LineChart"
                      :data="Wire"
                      :options="chartOptions"
                      style="width: 605px; height: 330px;"
                    />
                    <b-col class="table-scroll"> 
                        <b-card>
                          <table class="table">
                            <tr v-for="cost_Wireitem in cost_Wire">
                          
                            <th v-for="item in cost_Wireitem">{{item}}</th>
                            </tr>
                          </table>
                        </b-card>
                    </b-col>
                  </b-col>
                </b-col>
              </b-row>
            </b-col>
             <b-col>
              <b-row>
                <b-col class="m-1 bg-white rounded padding right-div">
                    <h5>Headlines</h5>
                    
                    <div class="shadow m-1 bg-white rounded padding margin-div" v-if="showcommon">
                            <div v-for="(Newsitem, index) in News" class="shadow m-1 bg-white rounded padding text-left">
                              <b-link target="_blank" v-bind:href="URL[index]">
                                <p>
                                  {{News[index]}}
                                </p>
                              </b-link>
                            </div>
                    </div>
                    <div class="shadow m-1 bg-white rounded padding margin-div" v-if="showrebar">
                            <div v-for="(Newsitem, index) in RebarNews" class="shadow m-1 bg-white rounded padding text-left">
                              <b-link target="_blank" v-bind:href="URLRebar[index]">
                                <p>
                                  {{RebarNews[index]}}
                                </p>
                              </b-link>
                            </div>
                    </div>
                    <div class="shadow m-1 bg-white rounded padding margin-div" v-if="showcarbon">
                            <div v-for="(Newsitem, index) in CarbonNews" class="shadow m-1 bg-white rounded padding text-left">
                              <b-link target="_blank" v-bind:href="URlCarbon[index]">
                                <p>
                                  {{CarbonNews[index]}}
                                </p>
                              </b-link>
                            </div>
                    </div>
                    <div class="shadow m-1 bg-white rounded padding margin-div" v-if="showWire">
                            <div v-for="(Newsitem, index) in WireNews" class="shadow m-1 bg-white rounded padding text-left">
                              <b-link target="_blank" v-bind:href="URL[index]">
                                <p>
                                  {{WireNews[index]}}
                                </p>
                              </b-link>
                            </div>
                    </div>
                    <div class="shadow m-1 bg-white rounded padding margin-div" v-if="showround">
                            <div v-for="(Newsitem, index) in RoundNews" class="shadow m-1 bg-white rounded padding text-left">
                              <b-link target="_blank" v-bind:href="URL[index]">
                                <p>
                                  {{RoundNews[index]}}
                                </p>
                              </b-link>
                            </div>
                    </div>
                    <div class="shadow m-1 bg-white rounded padding margin-div" v-if="showcold">
                            <div v-for="(Newsitem, index) in ColdNews" class="shadow m-1 bg-white rounded padding text-left">
                              <b-link target="_blank" v-bind:href="URL[index]">
                                <p>
                                  {{ColdNews[index]}}
                                </p>
                              </b-link>
                            </div>
                    </div>
                    <div class="shadow m-1 bg-white rounded padding margin-div" v-if="showcolor">
                            <div v-for="(Newsitem, index) in ColorNews" class="shadow m-1 bg-white rounded padding text-left">
                              <b-link target="_blank" v-bind:href="URL[index]">
                                <p>
                                  {{ColorNews[index]}}
                                </p>
                              </b-link>
                            </div>
                    </div>
                    <div class="shadow m-1 bg-white rounded padding margin-div" v-if="showGalvanized">
                            <div v-for="(Newsitem, index) in GalNews" class="shadow m-1 bg-white rounded padding text-left">
                              <b-link target="_blank" v-bind:href="URL[index]">
                                <p>
                                  {{GalNews[index]}}
                                </p>
                              </b-link>
                            </div>
                    </div>
                    <div class="shadow m-1 bg-white rounded padding margin-div heading" v-if="showHRC">
                        <div v-for="(Newsitem, index) in HRCNews" class="shadow m-1 bg-white rounded padding text-left">
                          <b-link target="_blank" v-bind:href="URL[index]">
                            <p>
                              {{HRCNews[index]}}
                            </p>
                          </b-link>
                        </div>
                    </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="modal1" size="lg"  title="Graphs of Zone" lazy>
        <b-card no-body>
          <b-tabs pills card>
            <b-tab title="Chart" active>
              <GChart
                type="LineChart"
                :data="chartData"
                :options="chartOptions"
                style="width: 605px; height: 330px;"
              />
            </b-tab>
            <b-tab title="Raw Data">
              <b-container>
              <b-row class="space-row">
                <b-col class="table-scroll">
                  <table class="table">
                  <tr v-for="chartDataitem in chartData">
                   
                    <th v-for="item in chartDataitem">{{item}}</th>
                  </tr>
                  </table>
                </b-col>
              </b-row>
              </b-container>
            </b-tab>
          </b-tabs>
        </b-card>
    </b-modal>
    <b-modal id="modal2" size="lg" title="Graphs of Zone" lazy>
        <b-card no-body>
          <b-tabs pills card>
            <b-tab title="Chart" active>
              <GChart
                type="LineChart"
                :data="Rebar"
                :options="chartOptions"
                style="width: 605px; height: 300px;"
              />
            </b-tab>
            <b-tab title="Raw Data">
              <b-row class="space-row">
              <b-col class="table-scroll">
                <table class="table">
              <tr v-for="Rebaritem in Rebar">
                   
                    <th v-for="item in Rebaritem">{{item}}</th>
                   
                  </tr>
                 
                </table>
              </b-col>
            </b-row>
            </b-tab>
          </b-tabs>
        </b-card>
    </b-modal>
    <b-modal id="modal3" size="lg"  title="Graphs of Zone" lazy>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Chart" active>
            <GChart
              type="LineChart"
              :data="Carbon"
              :options="chartOptions"
              style="width: 605px; height: 300px;"
          />
          </b-tab>
          <b-tab title="Raw Data">
            <b-row class="space-row">
            <b-col class="table-scroll">
              <table class="table">
                  <tr v-for="Carbonitem in Carbon">
                   
                    <th v-for="item in Carbonitem">{{item}}</th>
                  </tr>
              </table>
            </b-col>
          </b-row>
          </b-tab>
        </b-tabs>
      </b-card> 
    </b-modal>
    <b-modal id="modal4" size="lg" title="Graphs of Zone" lazy>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Chart" active>
            <GChart
            type="LineChart"
            :data="Round"
            :options="chartOptions"
            style="width: 605px; height: 330px;"
          />
          </b-tab>
          <b-tab title="Raw Data">
             <b-row class="space-row">
            <b-col class="table-scroll">
              <table class="table">
                    <tr v-for="Rounditem in Round">
                   
                    <th v-for="item in Rounditem">{{item}}</th>
                  </tr>
              </table>
            </b-col>
          </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
    <b-modal id="modal5" size="lg" title="Graphs of Zone" lazy>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Chart" active>
            <GChart
            type="LineChart"
            :data="Cold"
            :options="chartOptions"
            style="width: 605px; height: 330px;"
          />
          </b-tab>
          <b-tab title="Raw Data">
            <b-row class="space-row">
          <b-col class="table-scroll">
            <table class="table">
                    <tr v-for="Colditem in Cold">
                   
                    <th v-for="item in Colditem">{{item}}</th>
                  </tr>
            </table>
          </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
    <b-modal id="modal6" size="lg" title="Graphs of Zone" lazy>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Chart" active>
            <GChart
            type="LineChart"
            :data="Color"
            :options="chartOptions"
            style="width: 605px; height: 330px;"
          />
          </b-tab>
          <b-tab title="Raw Data">
             <b-row class="space-row">
            <b-col class="table-scroll">
              <table class="table">
                <tr v-for="Coloritem in Color">
                <th v-for="item in Coloritem">{{item}}</th>
                  </tr>
              </table>
            </b-col>
          </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
    <b-modal id="modal7" size="lg" title="Graphs of Zone" lazy>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Chart" active>
            <GChart
            type="LineChart"
            :data="Galvanish"
            :options="chartOptions"
            style="width: 605px; height: 330px;"
          />
          </b-tab>
          <b-tab title="Raw Data">
            <b-row class="space-row">
            <b-col class="table-scroll">
              <table class="table">
                    <tr v-for="Galvanishitem in Galvanish">
                   
                    <th v-for="item in Galvanishitem">{{item}}</th>
                  </tr>
              </table>
            </b-col>
          </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
    <b-modal id="modal8" size="lg" title="Graphs of Zone" lazy>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Chart" active>
            <GChart
            type="LineChart"
            :data="HRC"  
            :options="chartOptions"
            style="width: 605px; height: 330px;"
          />
          </b-tab>
          <b-tab title="Raw Data">
            <b-row class="space-row">
            <b-col class="table-scroll">
              <table class="table">
                    <tr v-for="HRCitem in HRC">
                   
                    <th v-for="item in HRCitem">{{item}}</th>
                  </tr>
              </table>
            </b-col>
          </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
    <b-modal id="modal9" size="lg" title="Graphs of Zone" lazy>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Chart" active>
             <GChart
            type="LineChart"
            :data="Wire"
            :options="chartOptions"
            style="width: 605px; height: 330px;"
          />
          </b-tab>
          <b-tab title="Raw Data">
            <b-row class="space-row">
            <b-col class="table-scroll">
              <table class="table">
                    <tr v-for="Wireitem in Wire">
                   
                    <th v-for="item in Wireitem">{{item}}</th>
                  </tr>
              </table>
            </b-col>
          </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
    <router-view></router-view>
  </div>
</template>

<script>
import Restapi from '@/services/Restapi'
export default {
  name: 'Home',
  data () {
    return {
       // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],
        ],
       Rebar: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],       
        ],
      Carbon: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],
        ],
        Round: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],
        ],
        Color: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],
        ],
        Cold: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],       
        ],
      Galvanish: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],       
        ],
      HRC: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],
        ],
        Wire: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],        
        ],
        cost_HRC: [
        ['Date', 'Cost', 'Price', 'ProfitLoss'],        
        ],
        cost_Common: [
        ['Date', 'Cost', 'Price', 'ProfitLoss'],        
        ],
        cost_Rebar: [
        ['Date', 'Cost', 'Price', 'ProfitLoss'],        
        ],
        cost_Carbon: [
        ['Date', 'Cost', 'Price', 'ProfitLoss'],        
        ],
        cost_Wire: [
          ['Date', 'Cost', 'Price', 'ProfitLoss'],
        ],
        cost_Round: [
          ['Date', 'Cost', 'Price', 'ProfitLoss'],
        ],
        cost_Cold: [
          ['Date', 'Cost', 'Price', 'ProfitLoss'],
        ],
        cost_Color: [
          ['Date', 'Cost', 'Price', 'ProfitLoss'],
        ],
        cost_Galvanished: [
          ['Date', 'Cost', 'Price', 'ProfitLoss'],
        ],
        News: [
        ],
        RebarNews: [],
        CarbonNews: [],
        WireNews: [],
        RoundNews: [],
        ColdNews : [],
        ColorNews: [],
        GalNews: [],
        HRCNews: [],
        URL: [
          ['https://www.metalbulletin.com/Article/3841688/Steel-All/US-imported-line-pipe-prices-rise-in-face-of-quotas.html'],
        ],
        URLRebar: [],
        URlCarbon: [],

      chartOptions: {
        chart: {
          title: 'Market-Intel',
          subtitle: 'Prices of Zone',
          height: 430
        }
      },
      showcommon: true,
      showrebar: false,
      showcarbon: false,
      showround: false,
      showcold: false,
      showcolor: false,
      showGalvanized: false,
      showHRC: false,
      showWire: false,
      completeData:[],
      RebarApi:[],
       coldHeadingSteelApi:[],
        galvanizedSteelApi:[],
         colorCoatedSteelApi:[],
          HRCApi:[],
           wireRodApi:[],
            commonCarbonRoundSteelApi:[],
             carbonStructuralSteelApi:[],
              roundBearingSteelApi:[],
              costHRCApi:[],
              costCommonApi:[],
              costRebarApi:[],
              costCarbonApi: [],
              costwireRodApi:[],
              costRoundApi: [],
              costColdApi: [],
              costColorApi: [],
              costGalvanizedApi: [],
              newsApi:[],
              rebarnewsApi: [],
              carbonNewsApi: [],
              wireNewsApi: [],
              roundNewsApi: [],
              coldNewsApi: [],
              colorNewsApi: [],
              galNewsApi: [],
              HRCNewsApi: [],
              urlSourceApi: [],
              urlrebarApi: [],
              urlCarbonApi: []

    }
  },
  mounted(){
    this.api();
  },
  filters: {
  randomVal: function (val) {
    
    return Math.floor(Math.random(2) * (4500 - 3500) + 3500,2);

  }
},
  methods: {
    type () {
      this.showcommon = !this.showcommon
      this.showrebar = false;
      this.showcarbon = false;
      this.showround = false;
      this.showcold = false;
      this.showcolor = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;

    },
    type1 () {
      this.showrebar = !this.showrebar
      this.showcommon = false;
      this.showcarbon = false;
      this.showround = false;
      this.showcold = false;
      this.showcolor = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
    },
    type2 () {
      this.showcarbon = !this.showcarbon
      this.showcommon = false;
      this.showrebar = false;
      this.showround = false;
      this.showcold = false;
      // this.showcolor = false;
      // this.showGalvanized = false;
      // this.showWire = false;
      // this.showHRC = false;
    },
    type3 () {
      this.showround = !this.showround
      this.showcommon = false;
      this.showrebar = false;
      this.showcarbon = false;
      this.showcold = false;
      this.showcolor = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
    },
    type4 () {
      this.showcold = !this.showcold
       this.showcommon = false;
      this.showrebar = false;
      this.showcolor = false;
      this.showround = false;
      this.showcarbon = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
    },
    type5 () {
      this.showcolor = !this.showcolor
      this.showcommon = false;
      this.showrebar = false;
      this.showround = false;
      this.showcarbon = false;
      this.showcold = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
    },
    type6 () {
      this.showGalvanized = !this.showGalvanized
      this.showcommon = false;
      this.showrebar = false;
      this.showround = false;
      this.showcold = false;
      this.showcarbon = false;
      this.showcolor = false;
      this.showWire = false;
      this.showHRC = false;
    },
    type7 () {
      this.showHRC = !this.showHRC
      this.showcommon = false;
      this.showrebar = false;
      this.showround = false;
      this.showcold = false;
      this.showcarbon = false;
      this.showcolor = false;
      this.showWire = false;
      this.showGalvanized = false;

    },
    type8 () {
      this.showWire = !this.showWire
      this.showGalvanized = false;
      this.showcommon = false;
      this.showrebar = false;
      this.showround = false;
      this.showcold = false;
      this.showcarbon = false;
      this.showcolor = false;

    },
  api:function(){


  var r = Restapi.PricesData(this.responseData); 
  console.log(r); 
  },
   randomVal: function (val) {
    
    return Math.floor(Math.random(2) * (4500 - 3500) + 3500,2);
   },
    responseData(re){
     
      var result=re.data;
      console.log('result');
                console.log(result);
                var coldHeadingSteel= result.filter(val=>val.Material=='Cold heading steel 22A（18A）(Yuan/tonne)')
                 var galvanizedSteel= result.filter(val=>val.Material=='Galvanized steel 0.5mm(Yuan/tonne)')
                 var colorCoatedSteel= result.filter(val=>val.Material=='Color-coated steel 0.476mm(Yuan/tonne)')
                 var HRC= result.filter(val=>val.Material=='HRC 3.0(Yuan/tonne)')
                 var Rebar= result.filter(val=>val.Material=='Rebar HRB400 20MM(Yuan/tonne)')
                 var wireRod= result.filter(val=>val.Material=='Wire rod Φ8mm HPB300 high speed wire rodHPB300(Yuan/tonne)')
                 var commonCarbonRoundSteel= result.filter(val=>val.Material=='common carbon round steel Φ20(Yuan/tonne)')
                 var roundBearingSteel= result.filter(val=>val.Material=='Round bearing steel 50mm(连铸)(Yuan/tonne)')
                 var carbonStructuralSteel= result.filter(val=>val.Material=='Carbon structural steel 50mm(Yuan/tonne)')
                 
                 //Printing cost and price
                 var costcoldHead= result.filter(val=>val.Material=='Cold heading steel 22A（18A）(Yuan/tonne)')
                 var costgalvanizedSteel= result.filter(val=>val.Material=='Galvanized steel 0.5mm(Yuan/tonne)')
                 var costcolorCoatedSteel= result.filter(val=>val.Material=='Color-coated steel 0.476mm(Yuan/tonne)')
                 var costHRC= result.filter(val=>val.Material=='HRC 3.0(Yuan/tonne)')
                 var costRebar= result.filter(val=>val.Material=='Rebar HRB400 20MM(Yuan/tonne)')
                 var costwireRod= result.filter(val=>val.Material=='Wire rod Φ8mm HPB300 high speed wire rodHPB300(Yuan/tonne)')
                 var costcommonCarbonRoundSteel= result.filter(val=>val.Material=='common carbon round steel Φ20(Yuan/tonne)')
                 var costroundBearingSteel= result.filter(val=>val.Material=='Round bearing steel 50mm(连铸)(Yuan/tonne)')
                 var costcarbonStructuralSteel= result.filter(val=>val.Material=='Carbon structural steel 50mm(Yuan/tonne)') 
                
                //news printing
                // var news = result.filter(val=>val.Material=='Cold heading steel 22A（18A）(Yuan/tonne)');
                // var source = result.filter(val=>val.Material=='Cold heading steel 22A（18A）(Yuan/tonne)');

                this.newsApi.push(commonCarbonRoundSteel);
                this.newsApi=this.newsApi[0];
                  
                 this.newsApi.forEach(element => {
                   this.News.push(element.Heading)
                 });
                this.News=JSON.parse(JSON.stringify(this.News));

                this.rebarnewsApi.push(Rebar);
                this.rebarnewsApi=this.rebarnewsApi[0];
                this.rebarnewsApi.forEach(element => {
                   this.RebarNews.push(element.Heading)
                 });
                this.RebarNews=JSON.parse(JSON.stringify(this.RebarNews));

                this.carbonNewsApi.push(carbonStructuralSteel);
                this.carbonNewsApi=this.carbonNewsApi[0];
                this.carbonNewsApi.forEach(element => {
                   this.CarbonNews.push(element.Heading)
                 });
                this.CarbonNews=JSON.parse(JSON.stringify(this.CarbonNews));
              
                this.wireNewsApi.push(wireRod);
                this.wireNewsApi=this.wireNewsApi[0];
                this.wireNewsApi.forEach(element => {
                   this.WireNews.push(element.Heading)
                 });
                this.WireNews=JSON.parse(JSON.stringify(this.WireNews));

                this.roundNewsApi.push(roundBearingSteel);
                this.roundNewsApi=this.roundNewsApi[0];
                this.roundNewsApi.forEach(element => {
                   this.RoundNews.push(element.Heading)
                 });
                this.RoundNews=JSON.parse(JSON.stringify(this.RoundNews));
                
                this.coldNewsApi.push(coldHeadingSteel);
                this.coldNewsApi=this.coldNewsApi[0];
                this.coldNewsApi.forEach(element => {
                   this.ColdNews.push(element.Heading)
                 });
                this.ColdNews=JSON.parse(JSON.stringify(this.ColdNews));

                this.colorNewsApi.push(colorCoatedSteel);
                this.colorNewsApi=this.colorNewsApi[0];
                this.colorNewsApi.forEach(element => {
                   this.ColorNews.push(element.Heading)
                 });
                this.ColorNews=JSON.parse(JSON.stringify(this.ColorNews));

                this.galNewsApi.push(galvanizedSteel);
                this.galNewsApi=this.galNewsApi[0];
                this.galNewsApi.forEach(element => {
                   this.GalNews.push(element.Heading)
                 });
                this.GalNews=JSON.parse(JSON.stringify(this.GalNews));

                this.HRCNewsApi.push(HRC);
                this.HRCNewsApi=this.HRCNewsApi[0];
                this.HRCNewsApi.forEach(element => {
                   this.HRCNews.push(element.Heading)
                 });
                this.HRCNews=JSON.parse(JSON.stringify(this.HRCNews));

                this.urlSourceApi.push(commonCarbonRoundSteel);
                this.urlSourceApi=this.urlSourceApi[0];
                // console.log(urlSourceApi[0]);
                this.urlSourceApi.forEach(element => {
                  this.URL.push(element.URL)
                });
                this.URL=JSON.parse(JSON.stringify(this.URL));

                this.urlrebarApi.push(Rebar);
                this.urlrebarApi=this.urlrebarApi[0];
                // console.log(urlSourceApi[0]);
                this.urlrebarApi.forEach(element => {
                  this.URLRebar.push(element.URL)
                });
                this.URLRebar=JSON.parse(JSON.stringify(this.URLRebar));
                console.log(URL);

                this.urlCarbonApi.push(Rebar);
                this.urlCarbonApi=this.urlCarbonApi[0];
                // console.log(urlSourceApi[0]);
                this.urlCarbonApi.forEach(element => {
                  this.URlCarbon.push(element.URL)
                });
                this.URlCarbon=JSON.parse(JSON.stringify(this.URlCarbon));
                console.log(URL);

                //Working of cost
                this.costHRCApi.push(costHRC);
                this.costHRCApi=this.costHRCApi[0];
                // console.log(this.costHRCApi[0]);
                this.costCommonApi.push(costcommonCarbonRoundSteel);
                this.costCommonApi=this.costCommonApi[0];
                // console.log(this.costCommonApi[0]);
                this.costRebarApi.push(costRebar);
                this.costRebarApi=this.costRebarApi[0];
                // console.log(this.costCommonApi[0]);

                this.costCarbonApi.push(costcarbonStructuralSteel);
                this.costCarbonApi=this.costCarbonApi[0];
                // console.log(this.costCarbonApi[0]);

                this.costwireRodApi.push(costwireRod);
                this.costwireRodApi=this.costwireRodApi[0];
                // console.log(this.costwireRodApi[0]);

                this.costRoundApi.push(costroundBearingSteel);
                this.costRoundApi=this.costRoundApi[0];

                this.costColdApi.push(costcoldHead);
                this.costColdApi=this.costColdApi[0];
                console.log(this.costColdApi[0]);

                this.costColorApi.push(costcolorCoatedSteel);
                this.costColorApi=this.costColorApi[0];

                this.costGalvanizedApi.push(costgalvanizedSteel);
                this.costGalvanizedApi=this.costGalvanizedApi[0];
                
                //printing charts and tables
                 this.RebarApi.push(Rebar);
                 this.RebarApi=this.RebarApi[0];
                 this.coldHeadingSteelApi.push(coldHeadingSteel);
                 this.coldHeadingSteelApi=this.coldHeadingSteelApi[0];
                 this.galvanizedSteelApi.push(galvanizedSteel);
                 this.galvanizedSteelApi=this.galvanizedSteelApi[0];
                 this.colorCoatedSteelApi.push(colorCoatedSteel);
                 this.colorCoatedSteelApi=this.colorCoatedSteelApi[0];
                 this.HRCApi.push(HRC);
                 this.HRCApi=this.HRCApi[0];
                 this.wireRodApi.push(wireRod);
                 this.wireRodApi=this.wireRodApi[0];
                 this.commonCarbonRoundSteelApi.push(commonCarbonRoundSteel);
                 this.commonCarbonRoundSteelApi=this.commonCarbonRoundSteelApi[0];
                 this.roundBearingSteelApi.push(roundBearingSteel);
                 this.roundBearingSteelApi=this.roundBearingSteelApi[0];
                 this.carbonStructuralSteelApi.push(carbonStructuralSteel);
                 this.carbonStructuralSteelApi=this.carbonStructuralSteelApi[0];
                 console.log(this.RebarApi[0]);
                 this.commonCarbonRoundSteelApi.forEach(element => {
                   this.chartData.push([element.Time,parseInt(element.Price),this.randomVal(),this.randomVal(),this.randomVal()])
                 });
                this.chartData=JSON.parse(JSON.stringify(this.chartData));

                 this.RebarApi.forEach(element => {
                   this.Rebar.push([element.Time,parseInt(element.Price),this.randomVal(),this.randomVal(),this.randomVal()])
                 });
                this.Rebar=JSON.parse(JSON.stringify(this.Rebar));
                // 
                 this.carbonStructuralSteelApi.forEach(element => {
                   this.Carbon.push([element.Time,parseInt(element.Price),this.randomVal(),this.randomVal(),this.randomVal()])
                 });
                this.Carbon=JSON.parse(JSON.stringify(this.Carbon));
                // 
                 this.roundBearingSteelApi.forEach(element => {
                   this.Round.push([element.Time,parseInt(element.Price),this.randomVal(),this.randomVal(),this.randomVal()])
                 });
                this.Round=JSON.parse(JSON.stringify(this.Round));
                // 
                 this.coldHeadingSteelApi.forEach(element => {
                   this.Cold.push([element.Time,parseInt(element.Price),this.randomVal(),this.randomVal(),this.randomVal()])
                 });
                this.Cold=JSON.parse(JSON.stringify(this.Cold));
                // 
                 this.colorCoatedSteelApi.forEach(element => {
                   this.Color.push([element.Time,parseInt(element.Price),this.randomVal(),this.randomVal(),this.randomVal()])
                 });
                this.Color=JSON.parse(JSON.stringify(this.Color));
                // 
                 this.galvanizedSteelApi.forEach(element => {
                   this.Galvanish.push([element.Time,parseInt(element.Price),this.randomVal(),this.randomVal(),this.randomVal()])
                 });
                this.Galvanish=JSON.parse(JSON.stringify(this.Galvanish));
                // 
                 this.HRCApi.forEach(element => {
                   this.HRC.push([element.Time,parseInt(element.Price),this.randomVal(),this.randomVal(),this.randomVal()])
                 });
                this.HRC=JSON.parse(JSON.stringify(this.HRC));
                // 
                 this.wireRodApi.forEach(element => {
                   this.Wire.push([element.Time,parseInt(element.Price),this.randomVal(),this.randomVal(),this.randomVal()])
                 });
                this.Wire=JSON.parse(JSON.stringify(this.Wire));

                //cost working
                this.costHRCApi.forEach(element => {
                   this.cost_HRC.push([element.Time,element.Price,parseInt(element.Cost),
                    (parseInt(element.Price) - element.Cost)
                   ])
                 });
                this.cost_HRC=JSON.parse(JSON.stringify(this.cost_HRC));

                this.costCommonApi.forEach(element => {
                  this.cost_Common.push([element.Time,element.Price,parseInt(element.Cost),
                    (parseInt(element.Price) - element.Cost)
                    ])
                });
                this.cost_Common=JSON.parse(JSON.stringify(this.cost_Common));

                this.costRebarApi.forEach(element => {
                  this.cost_Rebar.push([element.Time,element.Price,parseInt(element.Cost),
                    (parseInt(element.Price) - element.Cost)
                    ])
                });
                this.cost_Rebar=JSON.parse(JSON.stringify(this.cost_Rebar));

                this.costCarbonApi.forEach(element => {
                  this.cost_Carbon.push([element.Time,element.Price,parseInt(element.Cost),
                    (parseInt(element.Price) - element.Cost)
                    ])
                });
                this.cost_Carbon=JSON.parse(JSON.stringify(this.cost_Carbon));

                this.costwireRodApi.forEach(element => {
                  this.cost_Wire.push([element.Time,element.Price,parseInt(element.Cost),
                    (parseInt(element.Price) - element.Cost)
                    ])
                });
                this.cost_Wire=JSON.parse(JSON.stringify(this.cost_Wire));

                this.costRoundApi.forEach(element => {
                  this.cost_Round.push([element.Time,element.Price,parseInt(element.Cost),
                    (parseInt(element.Price) - element.Cost)
                    ])
                });
                this.cost_Round=JSON.parse(JSON.stringify(this.cost_Round));

                this.costColdApi.forEach(element => {
                  this.cost_Cold.push([element.Time,element.Price,parseInt(element.Cost),
                    (parseInt(element.Price) - element.Cost)
                    ])
                });
                this.cost_Cold=JSON.parse(JSON.stringify(this.cost_Cold));

                this.costColorApi.forEach(element => {
                  this.cost_Color.push([element.Time,element.Price,parseInt(element.Cost),
                    (parseInt(element.Price) - element.Cost)
                    ])
                });
                this.cost_Color=JSON.parse(JSON.stringify(this.cost_Color));

                this.costGalvanizedApi.forEach(element => {
                  this.cost_Galvanished.push([element.Time,element.Price,parseInt(element.Cost),
                    (parseInt(element.Price) - element.Cost)
                    ])
                });
                this.cost_Galvanished=JSON.parse(JSON.stringify(this.cost_Galvanished));
    }

  }
  
}
</script>

<style scoped>
  .no-scroll {
    /* overflow: hidden; */
    height: 550px;
  }
  #home {
    text-align: center;
    overflow-y: hidden;
  }
  .list-group-item{
    height: 80px;
    padding-top:30px;
  }
  .scroll{
    font-size: 14px;
    max-width: 100%;
  }
  ::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
  }
  .space-row{
    margin-bottom: 5px;
  }
  table{
    font-size: 12px;
    font-weight: 300;
    padding: 0% !important;
    overflow-y: scroll;
    height: 80px;
  }
  .news{
    width: 100%;
    height: 100%;
    }
  /* Zone list */
  .list-Zone{
    height: 160px;
    overflow-y: scroll;
  }
  /* APAC list height */
  .list-height{
    height: 40px;
    text-align: left;
    border: none;
    width: 150px;
    padding-right: 15px;
  }
  .table-scroll{
    width: 670px;
    overflow-x: auto;
    height: 180px;
    border: none;
  }
  td{
    height: 45px;
    padding: 14px;
    border-bottom: solid 1px;
  }
  th{
    height: 30px;
    width: 20px;
    padding: 4px;
  }
  .heading{
    font-size: 14px;
    text-align: justify;
    overflow: auto;
    font-weight: 300;
    width: 100%;
    padding: 15px;
  }
  p{
    font-size: 16px;
    font-weight: 500;
    margin:10px;
  }
  .right-div{
    height: 620px;
    overflow-y: scroll;
  }
  h6{
    text-align: left;
  }
  .margin-div{
    margin:20px;
    padding:10px;
  }
  a{
    color:#000;
  }
</style>
