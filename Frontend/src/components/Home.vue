<template>
  <div id="home">
    <b-container fluid class="main-home-container padding-left-5 padding-right-5">
      <b-row class="no-margin">
        <b-col class="no-padding">
          <b-row class="no-margin">
            <b-col>
              <b-row>
                <b-col class="shadow m-1 no-padding scroll">
                  <b-nav fill tabs>
                    <b-nav-item @click="type('common carban')" v-b-popover.hover="'Common carbon round steel'">CS Steel
                    </b-nav-item>
                    <b-nav-item @click="type1('rebar')" v-b-popover.hover="'Rebar'">Rebar</b-nav-item>
                    <b-nav-item @click="type2('Carbon structural')" v-b-popover.hover="'Carbon structural steel'">CS Steel</b-nav-item>
                    <b-nav-item @click="type8('wire rod')" v-b-popover.hover="'Wire Rod'">Wire Rod</b-nav-item>
                    <b-nav-item @click="type3('Round Bearing steel')" v-b-popover.hover="'Round Bearing steel'">RB Steel</b-nav-item>
                    <b-nav-item @click="type4('cold')" v-b-popover.hover="'cold heading steel'">CH Steel</b-nav-item>
                    <b-nav-item @click="type5('Color-Coated Steel')" v-b-popover.hover="'Color-Coated Steel'">CC Steel</b-nav-item>
                    <b-nav-item @click="type6('Galvanized steel')" v-b-popover.hover="'Galvanized steel'">Galvanized Steel</b-nav-item>
                    <b-nav-item @click="type7('hrc')" v-b-popover.hover="'Hot Rolled Coiled'">HRC</b-nav-item>
                  </b-nav>
                </b-col>
              </b-row>
              <b-row>
               <b-col class="no-scroll">
                 <b-col class="shadow m-1 bg-white rounded" v-if="showcommon" @click="modalcommon = !modalcommon" lazy>
                    <GChart
                      type="LineChart"
                      :data="chartData"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                      />
                       <b-col class="table-scroll"> 
                           <table class="table">
                            <tr>
                              <th>Date</th>
                            <td v-for="(cost_Rebaritem, index) in cost_Common" :key="`,cost_Rebaritem-${index}`">
                          
                            <th>{{cost_Common[index][0].Time}}</th>
                            </td>
                            </tr>
                             <tr>
                              <td>Production Price</td>
                            <td v-for="(cost_Rebaritem, index) in cost_Common" :key="`,cost_Rebaritem-${index}`">
                          
                            <th>{{cost_Common[index][0].Price}}</th>
                            </td>
                            </tr>
                            <tr>
                              <td>Cost</td>
                            <td v-for="(cost_Rebaritem, index) in cost_Common" :key="`,cost_Rebaritem-${index}`">
                          
                            <th>{{cost_Common[index][0].Cost}}</th>
                            </td>
                            </tr>
                             <tr>
                              <td class="profit">Profit / Loss</td>
                            <td v-for="(cost_Rebaritem, index) in cost_Common" :key="`,cost_Rebaritem-${index}`">
                          
                            <th>{{cost_Common[index][0].Profit}}</th>
                            </td>
                            </tr>
                          </table>
                      </b-col>
                </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showrebar" @click="modalrebar = !modalrebar" lazy>
                     <GChart
                      type="LineChart"
                      :data="Rebar"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                    />
                    <b-col class="table-scroll">
                          <table class="table">
                            <tr>
                              <th>Date</th>
                            <td v-for="(cost_Rebaritem, index) in cost_Rebar" :key="`,cost_Rebaritem-${index}`">
                          
                            <th>{{cost_Rebar[index][0].Time}}</th>
                            </td>
                            </tr>
                             <tr>
                              <td>Production Price</td>
                            <td v-for="(cost_Rebaritem, index) in cost_Rebar" :key="`,cost_Rebaritem-${index}`">
                          
                            <th>{{cost_Rebar[index][0].Price}}</th>
                            </td>
                            </tr>
                            <tr>
                              <td>Cost</td>
                            <td v-for="(cost_Rebaritem, index) in cost_Rebar" :key="`,cost_Rebaritem-${index}`">
                          
                            <th>{{cost_Rebar[index][0].Cost}}</th>
                            </td>
                            </tr>
                             <tr>
                              <td class="profit">Profit / Loss</td>
                              
                           
                            <td v-for="(cost_Rebaritem, index) in cost_Rebar" :key="`,cost_Rebaritem-${index}`">
                          
                            <th>{{cost_Rebar[index][0].Profit}}</th>
                            </td>
                            </tr>
                          </table>
                    </b-col>
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showcarbon" @click="modalcarbon = !modalcarbon" lazy>
                   <GChart
                      type="LineChart"
                      :data="Carbon"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                    />
                    <b-col class="table-scroll"> 
                      <table class="table">
                        <tr>
                          <td>Date</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Carbon" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Carbon[index][0].Time}}</th>
                        </td>
                        </tr>
                          <tr>
                          <td>Production Price</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Carbon" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Carbon[index][0].Price}}</th>
                        </td>
                        </tr>
                        <tr>
                          <td>Cost</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Carbon" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Carbon[index][0].Cost}}</th>
                        </td>
                        </tr>
                          <tr>
                          <td class="profit">Profit / Loss</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Carbon" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Carbon[index][0].Profit}}</th>
                        </td>
                        </tr>
                      </table>
                    </b-col>
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showround" @click="modalround = !modalround" lazy>
                    <GChart
                      type="LineChart"
                      :data="Round"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                    />
                     <b-col class="table-scroll"> 
                        <table class="table">
                            <tr>
                              <td>Date</td>
                            <td v-for="(cost_Rebaritem, index) in cost_Round" :key="`,cost_Rebaritem-${index}`">
                          
                            <th>{{cost_Round[index][0].Time}}</th>
                            </td>
                            </tr>
                             <tr>
                              <td>Production Price</td>
                            <td v-for="(cost_Rebaritem, index) in cost_Round" :key="`,cost_Rebaritem-${index}`">
                          
                            <th>{{cost_Round[index][0].Price}}</th>
                            </td>
                            </tr>
                            <tr>
                              <td>Cost</td>
                            <td v-for="(cost_Rebaritem, index) in cost_Round" :key="`,cost_Rebaritem-${index}`">
                          
                            <th>{{cost_Round[index][0].Cost}}</th>
                            </td>
                            </tr>
                             <tr>
                              <td class="profit">Profit / Loss</td>
                              
                           
                            <td v-for="(cost_Rebaritem, index) in cost_Round" :key="`,cost_Rebaritem-${index}`">
                          
                            <th>{{cost_Round[index][0].Profit}}</th>
                            </td>
                            </tr>
                          </table>
                    </b-col>
                  </b-col>
                  
                  <b-col class="shadow m-1 bg-white rounded" v-if="showcold" @click="modalcold = !modalcold" lazy>
                    <GChart
                      type="LineChart"
                      :data="Cold"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                    />
                    <b-col class="table-scroll"> 
                      <table class="table">
                        <tr>
                          <td>Date</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Cold" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Cold[index][0].Time}}</th>
                        </td>
                        </tr>
                          <tr>
                          <td>Production Price</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Cold" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Cold[index][0].Price}}</th>
                        </td>
                        </tr>
                        <tr>
                          <td>Cost</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Cold" :key="`,cost_Rebaritem-${index}`"> 
                      
                        <th>{{cost_Cold[index][0].Cost}}</th>
                        </td>
                        </tr>
                          <tr>
                          <td class="profit">Profit / Loss</td>
                          
                        
                        <td v-for="(cost_Rebaritem, index) in cost_Cold" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Cold[index][0].Profit}}</th>
                        </td>
                        </tr>
                      </table>
                    </b-col>
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showcolor" @click="modalcolor = !modalcolor" lazy>
                    <GChart
                      type="LineChart"
                      :data="Color"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                    />
                    <b-col class="table-scroll"> 
                      <table class="table">
                        <tr>
                          <td>Date</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Color" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Color[index][0].Time}}</th>
                        </td>
                        </tr>
                          <tr>
                          <td>Production Price</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Color" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Color[index][0].Price}}</th>
                        </td>
                        </tr>
                        <tr>
                          <td>Cost</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Color" :key="`,cost_Rebaritem-${index}`"> 
                      
                        <th>{{cost_Color[index][0].Cost}}</th>
                        </td>
                        </tr>
                          <tr>
                          <td class="profit">Profit / Loss</td>
                          
                        
                        <td v-for="(cost_Rebaritem, index) in cost_Color" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Color[index][0].Profit}}</th>
                        </td>
                        </tr>
                      </table>
                    </b-col>
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showGalvanized" @click="modalgal = !modalgal" lazy>
                    <GChart
                      type="LineChart"
                      :data="Galvanish"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                    />
                    <b-col class="table-scroll"> 
                      <table class="table">
                        <tr>
                          <td>Date</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Galvanished" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Color[index][0].Time}}</th>
                        </td>
                        </tr>
                          <tr>
                          <td>Production Price</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Galvanished" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Color[index][0].Price}}</th>
                        </td>
                        </tr>
                        <tr>
                          <td>Cost</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Galvanished" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Galvanished[index][0].Cost}}</th>
                        </td>
                        </tr>
                          <tr>
                          <td class="profit">Profit / Loss</td>
                          
                        
                        <td v-for="(cost_Rebaritem, index) in cost_Galvanished" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Galvanished[index][0].Profit}}</th>
                        </td>
                        </tr>
                      </table>
                    </b-col>
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showHRC" @click="modalHRC = !modalHRC" lazy>
                    <GChart
                      type="LineChart"
                      :data="HRC"
                      :options="chartOptions"
                      style="width: 420; height: 330px;"
                    />
                     <b-col class="table-scroll"> 
                        <table class="table">
                        <tr>
                          <td>Date</td>
                        <td v-for="(cost_Rebaritem, index) in cost_HRC" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_HRC[index][0].Time}}</th>
                        </td>
                        </tr>
                          <tr>
                          <td>Production Price</td>
                        <td v-for="(cost_Rebaritem, index) in cost_HRC" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_HRC[index][0].Price}}</th>
                        </td>
                        </tr>
                        <tr>
                          <td>Cost</td>
                        <td v-for="(cost_Rebaritem, index) in cost_HRC" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_HRC[index][0].Cost}}</th>
                        </td>
                        </tr>
                          <tr>
                          <td class="profit">Profit / Loss</td>
                          
                        
                        <td v-for="(cost_Rebaritem, index) in cost_HRC" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_HRC[index][0].Profit}}</th>
                        </td>
                        </tr>
                      </table>
                      </b-col>
                  </b-col>
                   <b-col class="shadow m-1 bg-white rounded" v-if="showWire" @click="modalwire = !modalwire" lazy>
                    <GChart
                      type="LineChart"
                      :data="Wire"
                      :options="chartOptions"
                      style="width: 605px; height: 330px;"
                    />
                    <b-col class="table-scroll"> 
                      <table class="table">
                        <tr>
                          <td>Date</td>
                        <td v-for="(cost_Rebaritem, index) in cost_HRC" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Wire[index][0].Time}}</th>
                        </td>
                        </tr>
                          <tr>
                          <td>Production Price</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Wire" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Wire[index][0].Price}}</th>
                        </td>
                        </tr>
                        <tr>
                          <td>Cost</td>
                        <td v-for="(cost_Rebaritem, index) in cost_Wire" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Wire[index][0].Cost}}</th>
                        </td>
                        </tr>
                          <tr>
                          <td class="profit">Profit / Loss</td>
                          
                        
                        <td v-for="(cost_Rebaritem, index) in cost_Wire" :key="`,cost_Rebaritem-${index}`">
                      
                        <th>{{cost_Wire[index][0].Profit}}</th>
                        </td>
                        </tr>
                      </table>
                    </b-col>
                  </b-col>
                </b-col>
              </b-row>
            </b-col>
             <b-col>
              <b-row>
                <b-col cols="12" class="m-1 bg-white rounded padding right-div">
                    <div class="shadow m-1 bg-white rounded padding">
                      <h5>Media Alert</h5>
                    </div>
                    
                    <div class="shadow m-1 bg-white rounded padding text-left margin-div" v-if="showcommon">
                          <div v-for="(test, index) in test1" class="shadow m-1 bg-white rounded padding text-left">
                            <p class="margin-div">

                              <b-link target="_blank" v-bind:href="test1[index][0].link">
                                  {{test1[index][0].headline}}<span style="color: blue;">read more...</span>
                              </b-link>  
                              <br>                          
                              <b-container class="bv-example-row" style="font-size: 16px;">
                                <b-row>
                                    <b-col>
                                Score : {{ test1[index][0].score }}
                                    </b-col>
                                    <b-col>
                                Date : {{test1[index][0].date}}

                                    </b-col>
                                </b-row>
                              </b-container>
                            </p>
                          </div>
                    </div>
                    <div class="m-1 bg-white rounded padding margin-div" v-if="showrebar">
                           <div v-for="(test, index) in test1" class="shadow m-1 bg-white rounded padding text-left">
                            <p class="margin-div">

                              <b-link target="_blank" v-bind:href="test1[index][0].link">
                                  {{test1[index][0].headline}}<span style="color: blue;">read more...</span>
                              </b-link>  
                              <br>                          
                              <b-container class="bv-example-row" style="font-size: 16px;">
                                <b-row>
                                    <b-col>
                                Score : {{ test1[index][0].score }}
                                    </b-col>
                                    <b-col>
                                Date : {{test1[index][0].date}}

                                    </b-col>
                                </b-row>
                              </b-container>
                            </p>
                          </div>
                    </div>
                    <div class="shadow m-1 bg-white rounded padding margin-div" v-if="showcarbon">
                           <div v-for="(test, index) in test1" class="shadow m-1 bg-white rounded padding text-left">
                            <p class="margin-div">

                              <b-link target="_blank" v-bind:href="test1[index][0].link">
                                  {{test1[index][0].headline}}<span style="color: blue;">read more...</span>
                              </b-link>  
                              <br>                          
                              <b-container class="bv-example-row" style="font-size: 16px;">
                                <b-row>
                                    <b-col>
                                Score : {{ test1[index][0].score }}
                                    </b-col>
                                    <b-col>
                                Date : {{test1[index][0].date}}

                                    </b-col>
                                </b-row>
                              </b-container>
                            </p>
                          </div>
                    </div>
                    <div class="shadow m-1 bg-white rounded padding margin-div" v-if="showWire">
                            <div v-for="(test, index) in test1" class="shadow m-1 bg-white rounded padding text-left">
                            <p class="margin-div">

                              <b-link target="_blank" v-bind:href="test1[index][0].link">
                                  {{test1[index][0].headline}}<span style="color: blue;">read more...</span>
                              </b-link>  
                              <br>                          
                              <b-container class="bv-example-row" style="font-size: 16px;">
                                <b-row>
                                    <b-col>
                                Score : {{ test1[index][0].score }}
                                    </b-col>
                                    <b-col>
                                Date : {{test1[index][0].date}}

                                    </b-col>
                                </b-row>
                              </b-container>
                            </p>
                          </div>
                    </div>
                    <div class="shadow m-1 bg-white rounded padding margin-div" v-if="showround">
                            <div v-for="(test, index) in test1" class="shadow m-1 bg-white rounded padding text-left">
                            <p class="margin-div">

                              <b-link target="_blank" v-bind:href="test1[index][0].link">
                                  {{test1[index][0].headline}}<span style="color: blue;">read more...</span>
                              </b-link>  
                              <br>                          
                              <b-container class="bv-example-row" style="font-size: 16px;">
                                <b-row>
                                    <b-col>
                                Score : {{ test1[index][0].score }}
                                    </b-col>
                                    <b-col>
                                Date : {{test1[index][0].date}}

                                    </b-col>
                                </b-row>
                              </b-container>
                            </p>
                          </div>
                    </div>
                    <div class="shadow m-1 bg-white rounded padding margin-div" v-if="showcold">
                     <div v-for="(test, index) in test1" class="shadow m-1 bg-white rounded padding text-left">
                            <p class="margin-div">

                              <b-link target="_blank" v-bind:href="test1[index][0].link">
                                  {{test1[index][0].headline}}<span style="color: blue;">read more...</span>
                              </b-link>  
                              <br>                          
                              <b-container class="bv-example-row" style="font-size: 16px;">
                                <b-row>
                                    <b-col>
                                Score : {{ test1[index][0].score }}
                                    </b-col>
                                    <b-col>
                                Date : {{test1[index][0].date}}

                                    </b-col>
                                </b-row>
                              </b-container>
                            </p>
                          </div>
                    </div>
                    
                    <div class="shadow m-1 bg-white rounded padding margin-div" v-if="showcolor">
                           <div v-for="(test, index) in test1" class="shadow m-1 bg-white rounded padding text-left">
                            <p class="margin-div">

                              <b-link target="_blank" v-bind:href="test1[index][0].link">
                                  {{test1[index][0].headline}}<span style="color: blue;">read more...</span>
                              </b-link>  
                              <br>                          
                              <b-container class="bv-example-row" style="font-size: 16px;">
                                <b-row>
                                    <b-col>
                                Score : {{ test1[index][0].score }}
                                    </b-col>
                                    <b-col>
                                Date : {{test1[index][0].date}}

                                    </b-col>
                                </b-row>
                              </b-container>
                            </p>
                          </div>
                    </div>
                    <div class="shadow m-1 bg-white rounded padding margin-div" v-if="showGalvanized">
                           <div v-for="(test, index) in test1" class="shadow m-1 bg-white rounded padding text-left">
                            <p class="margin-div">

                              <b-link target="_blank" v-bind:href="test1[index][0].link">
                                  {{test1[index][0].headline}}<span style="color: blue;">read more...</span>
                              </b-link>  
                              <br>                          
                              <b-container class="bv-example-row" style="font-size: 16px;">
                                <b-row>
                                    <b-col>
                                Score : {{ test1[index][0].score }}
                                    </b-col>
                                    <b-col>
                                Date : {{test1[index][0].date}}

                                    </b-col>
                                </b-row>
                              </b-container>
                            </p>
                          </div>
                    </div>
                    <div class="shadow m-1 bg-white rounded padding margin-div heading" v-if="showHRC">
                       <div v-for="(test, index) in test1" class="shadow m-1 bg-white rounded padding text-left">
                            <p class="margin-div">

                              <b-link target="_blank" v-bind:href="test1[index][0].link">
                                  {{test1[index][0].headline}}<span style="color: blue;">read more...</span>
                              </b-link>  
                              <br>                          
                              <b-container class="bv-example-row" style="font-size: 16px;">
                                <b-row>
                                    <b-col>
                                Score : {{ test1[index][0].score }}
                                    </b-col>
                                    <b-col>
                                Date : {{test1[index][0].date}}

                                    </b-col>
                                </b-row>
                              </b-container>
                            </p>
                          </div>
                    </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-modal v-model="modalcommon" size="lg" title="Graphs of Zone" lazy>
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
    <b-modal v-model="modalrebar" size="lg" title="Graphs of Zone" lazy>
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
    <b-modal v-model="modalcarbon" size="lg"  title="Graphs of Zone" lazy>
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
    <b-modal v-model="modalround" size="lg" title="Graphs of Zone" lazy>
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
    <b-modal v-model="modalcold" size="lg" title="Graphs of Zone" lazy>
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
    <b-modal v-model="modalcolor" size="lg" title="Graphs of Zone" lazy>
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
    <b-modal v-model="modalgal" size="lg" title="Graphs of Zone" lazy>
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
    <b-modal v-model="modalHRC" size="lg" title="Graphs of Zone" lazy>
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
    <b-modal v-model="modalwire" size="lg" title="Graphs of Zone" lazy>
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
                    <tr v-for="Wireitem in Wire" galvanizedSteel>
                   
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
  data() {
    return {
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
        modalrebar: false,
        modalcommon: false,
        modalcarbon: false,
        modalwire: false,
        modalround: false,
        modalcold: false,
        modalcolor: false,
        modalgal: false,
        modalHRC: false,
        test1: [],
        testLink: [],
        cost_HRC: [],
        cost_Common: [],
        cost_Rebar: [],
        cost_Carbon: [],
        cost_Wire: [],
        cost_Round: [],
        cost_Cold: [],
        cost_Color: [],
        cost_Galvanished: [],
        News: [],
        RebarNews: [],
        CarbonNews: [],
        WireNews: [],
        RoundNews: [],
        ColdNews : [],
        ColorNews: [],
        GalNews: [],
        HRCNews: [],
        URL: [],
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
              urlCarbonApi: [],
              dateApi: [],
              testApiRebar: []
    }
  },
  mounted(){
    this.api();
    //this.api2();
    this.api2('common carban round');
  },
  filters: {
  randomVal: function (val) {
    
    return Math.floor(Math.random(2) * (4500 - 3500) + 3500,2);
    }
},
  methods: {

    type (val) {
      if(!this.showcommon){
      this.api2(val)
      this.showcommon = !this.showcommon
      this.showrebar = false;
      this.showcarbon = false;
      this.showround = false;
      this.showcold = false;
      this.showcolor = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
      }
    },
    type1 (val) {
      if(!this.showrebar){
         this.api2(val)
      this.showrebar = !this.showrebar
      this.showcommon = false;
      this.showcarbon = false;
      this.showround = false;
      this.showcold = false;
      this.showcolor = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
      }
      
    },
    type4 (val) {
      // if(!this.showcold){
         this.api2(val)
        //  console.log(this.api2(val));
      this.showcold = !this.showcold
      this.showcommon = false;
      this.showcarbon = false;
      this.showround = false;
      // this.showcold = false;
      this.showcolor = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
      // }
    },
    type2 (val) {
      if(!this.showcarbon){
          this.api2(val)
      this.showcarbon = !this.showcarbon
      this.showcommon = false;
      this.showrebar = false;
      this.showround = false;
      this.showcold = false;
      this.showcolor = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
      }
    },
    type3 (val) {
      if(!this.showround){
          this.api2(val)
      this.showround = !this.showround
      this.showcommon = false;
      this.showrebar = false;
      this.showcarbon = false;
      this.showcold = false;
      this.showcolor = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
      }
    },
    type5 (val) {
      if(!this.showcolor){
        this.api2(val)
      this.showcolor = !this.showcolor
      this.showcommon = false;
      this.showrebar = false;
      this.showround = false;
      this.showcarbon = false;
      this.showcold = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
    }
    },
    type6 (val) {
      if(!this.showGalvanized){
        this.api2(val);      
      this.showGalvanized = !this.showGalvanized
      this.showcommon = false;
      this.showrebar = false;
      this.showround = false;
      this.showcold = false;
      this.showcarbon = false;
      this.showcolor = false;
      this.showWire = false;
      this.showHRC = false;
      }
    },
    type7 (val) {
      if(!this.showHRC){
        this.api2(val);
      this.showHRC = !this.showHRC
      this.showcommon = false;
      this.showrebar = false;
      this.showround = false;
      this.showcold = false;
      this.showcarbon = false;
      this.showcolor = false;
      this.showWire = false;
      this.showGalvanized = false;
      }
    },
    type8 (val) {
      if(!this.showWire){
        this.api2(val);
      this.showWire = !this.showWire
      this.showGalvanized = false;
      this.showcommon = false;
      this.showrebar = false;
      this.showround = false;
      this.showcold = false;
      this.showcarbon = false;
      this.showcolor = false;
      this.showHRC = false;
      }
    },

    api2:function(val){
      this.test1=[];
      var r = Restapi.RebarData(val).then((s) => {
      console.log('Result Data---- rebar');
      console.log(s.data);

      this.responsecallRebar(s)
      });
      console.log(r);
      },

    responsecallRebar(re) {
      console.log('result api bhumi');
      // console.log(resultOther);

      re.data.forEach(element => {
                  this.test1.push([{
                    "headline":element.Headline,
                    "score":element.Score,
                    "link":element.URL,
                    "date": element.Date
                  }])
                })
        console.log("testtt22");

        console.log(this.test1);
        // console.log(this.testLink.URL);
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
      console.log('result new');
                console.log(result);
                // console.log("result.Time");
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

                this.newsApi.push(commonCarbonRoundSteel);
                this.newsApi=this.newsApi[0];
                  
                 this.newsApi.forEach(element => {
                   this.News.push(element.Heading)
                 });
                this.News=JSON.parse(JSON.stringify(this.News));

                this.rebarnewsApi.push(costRebar = result.filter(val=>val.Material=='Rebar HRB400 20MM(Yuan/tonne)' && val.Heading!=''));
                this.rebarnewsApi=this.rebarnewsApi[0];
                this.rebarnewsApi.forEach(element => {
                   this.RebarNews.push(element.Heading)
                 });
                this.RebarNews=JSON.parse(JSON.stringify(this.RebarNews));

                this.carbonNewsApi.push(costcarbonStructuralSteel = result.filter(val=>val.Material=='Carbon structural steel 50mm(Yuan/tonne)' && val.Heading!=''));
                this.carbonNewsApi=this.carbonNewsApi[0];
                this.carbonNewsApi.forEach(element => {
                   this.CarbonNews.push(element.Heading)
                 });
                this.CarbonNews=JSON.parse(JSON.stringify(this.CarbonNews));
              
                this.wireNewsApi.push(costwireRod = result.filter(val=>val.Material=='Wire rod Φ8mm HPB300 high speed wire rodHPB300(Yuan/tonne)' && val.Heading!=''));
                this.wireNewsApi=this.wireNewsApi[0];
                this.wireNewsApi.forEach(element => {
                   this.WireNews.push(element.Heading)
                 });
                this.WireNews=JSON.parse(JSON.stringify(this.WireNews));

                this.roundNewsApi.push(roundBearingSteel = result.filter(val=>val.Material=='Round bearing steel 50mm(连铸)(Yuan/tonne)' && val.Heading!=''));
                this.roundNewsApi=this.roundNewsApi[0];
                this.roundNewsApi.forEach(element => {
                   this.RoundNews.push(element.Heading)
                 });
                this.RoundNews=JSON.parse(JSON.stringify(this.RoundNews));
                
                this.coldNewsApi.push(costcoldHead = result.filter(val=>val.Material=='Cold heading steel 22A（18A）(Yuan/tonne)' && val.Heading!=''));
                this.coldNewsApi=this.coldNewsApi[0];
                this.coldNewsApi.forEach(element => {
                   this.ColdNews.push(element.Heading)
                 });
                this.ColdNews=JSON.parse(JSON.stringify(this.ColdNews));

                this.colorNewsApi.push(costcolorCoatedSteel = result.filter(val=>val.Material=='Color-coated steel 0.476mm(Yuan/tonne)' && val.Heading!=''));
                this.colorNewsApi=this.colorNewsApi[0];
                this.colorNewsApi.forEach(element => {
                   this.ColorNews.push(element.Heading)
                 });
                this.ColorNews=JSON.parse(JSON.stringify(this.ColorNews));

                this.galNewsApi.push(costgalvanizedSteel = result.filter(val=>val.Material=='Galvanized steel 0.5mm(Yuan/tonne)' && val.Heading!=''));
                this.galNewsApi=this.galNewsApi[0];
                this.galNewsApi.forEach(element => {
                   this.GalNews.push(element.Heading)
                 });
                this.GalNews=JSON.parse(JSON.stringify(this.GalNews));

                this.HRCNewsApi.push(costHRC = result.filter(val=>val.Material=='HRC 3.0(Yuan/tonne)' && val.Heading!=''));
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

                this.urlCarbonApi.push(Rebar);
                this.urlCarbonApi=this.urlCarbonApi[0];
                // console.log(urlSourceApi[0]);
                this.urlCarbonApi.forEach(element => {
                  this.URlCarbon.push(element.URL)
                });
                this.URlCarbon=JSON.parse(JSON.stringify(this.URlCarbon));

                //Working of cost
                this.costHRCApi.push(HRC);
                this.costHRCApi=this.costHRCApi[0];
                // console.log(this.costHRCApi[0]);
                this.costCommonApi.push(costcommonCarbonRoundSteel);
                this.costCommonApi=this.costCommonApi[0];
                // console.log(this.costCommonApi[0]);
                this.costRebarApi.push(costRebar);
                this.costRebarApi=this.costRebarApi[0];
                // console.log(this.costCommonApi[0]);

                this.costCarbonApi.push(carbonStructuralSteel);
                this.costCarbonApi=this.costCarbonApi[0];
                // console.log(this.costCarbonApi[0]);

                this.costwireRodApi.push(wireRod);
                this.costwireRodApi=this.costwireRodApi[0];
                // console.log(this.costwireRodApi[0]);

                this.costRoundApi.push(costroundBearingSteel);
                this.costRoundApi=this.costRoundApi[0];

                this.costColdApi.push(coldHeadingSteel);
                this.costColdApi=this.costColdApi[0];
                // console.log(this.costColdApi[0]);

                this.costColorApi.push(colorCoatedSteel);
                this.costColorApi=this.costColorApi[0];

                this.costGalvanizedApi.push(galvanizedSteel);
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
                //  console.log(this.RebarApi[0].Time);

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
                   this.cost_HRC.push([{
                    "Time":element.Time,
                    "Price":element.Price,
                    "Cost":parseInt(element.Cost),
                  
                    "Profit":(parseInt(element.Price) - element.Cost)
                  }])
                 });
                this.cost_HRC=JSON.parse(JSON.stringify(this.cost_HRC));

                this.costCommonApi.forEach(element => {
                  this.cost_Common.push([{
                    "Time":element.Time,
                    "Price":element.Price,
                    "Cost":parseInt(element.Cost),
                    "Profit":(parseInt(element.Price) - element.Cost)
                  }]
                    )
                });
                this.cost_Common=JSON.parse(JSON.stringify(this.cost_Common));

                this.costRebarApi.forEach(element => {
                  this.cost_Rebar.push([{
                    "Time":element.Time,
                    "Price":element.Price,
                    "Cost":parseInt(element.Cost),
                  
                    "Profit":(parseInt(element.Price) - element.Cost)
                  }])
                });
                this.cost_Rebar=JSON.parse(JSON.stringify(this.cost_Rebar));

                // console.log(this.cost_Rebar[0][0].Time);
                
                this.costCarbonApi.forEach(element => {
                  this.cost_Carbon.push([{
                    "Time":element.Time,
                    "Price":element.Price,
                    "Cost":parseInt(element.Cost),
                  
                    "Profit":(parseInt(element.Price) - element.Cost)
                  }])
                });
                this.cost_Carbon=JSON.parse(JSON.stringify(this.cost_Carbon));

                this.costwireRodApi.forEach(element => {
                  this.cost_Wire.push([{

                  
                    "Time":element.Time,
                    "Price":element.Price,
                    "Cost":parseInt(element.Cost),
                  
                    "Profit":(parseInt(element.Price) - element.Cost)
                  }])
                });
                this.cost_Wire=JSON.parse(JSON.stringify(this.cost_Wire));

                this.costRoundApi.forEach(element => {
                  this.cost_Round.push([{
                    "Time":element.Time,
                    "Price":element.Price,
                    "Cost":parseInt(element.Cost),
                  
                    "Profit":(parseInt(element.Price) - element.Cost)
                  }])
                });
                this.cost_Round=JSON.parse(JSON.stringify(this.cost_Round));

                this.costColdApi.forEach(element => {
                  this.cost_Cold.push([{
                    "Time":element.Time,
                    "Price":element.Price,
                    "Cost":parseInt(element.Cost),
                  
                    "Profit":(parseInt(element.Price) - element.Cost)
                  }])
                });
                this.cost_Cold=JSON.parse(JSON.stringify(this.cost_Cold));

                this.costColorApi.forEach(element => {
                  this.cost_Color.push([{
                    "Time":element.Time,
                    "Price":element.Price,
                    "Cost":parseInt(element.Cost),
                  
                    "Profit":(parseInt(element.Price) - element.Cost)
                  }])
                });
                this.cost_Color=JSON.parse(JSON.stringify(this.cost_Color));

                this.costGalvanizedApi.forEach(element => {
                  this.cost_Galvanished.push([{
                    "Time":element.Time,
                    "Price":element.Price,
                    "Cost":parseInt(element.Cost),
                  
                    "Profit":(parseInt(element.Price) - element.Cost)
                  }])
                });
                this.cost_Galvanished=JSON.parse(JSON.stringify(this.cost_Galvanished));
    }
  }
}
</script>

<style scoped>
ul li {
		display: inline;
	}
  .no-scroll {
    /* overflow: hidden; */
    height: 550px;
    max-width: 735px;

  }
  #home {
    text-align: center;
    overflow-y: hidden;
  }
  .b-nav-item{
    font-weight: 500;
  }
  .list-group-item{
    height: 80px;
    padding-top:30px;
  }
  .scroll{
    font-size: 14px;
    font-weight: 500;
    max-width: 735px;
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
    font-weight: 100;
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
  .profit{
    color:#bb1212;
    font-weight: 500;
  }
  .table-scroll{
    width: 670px;
    overflow-x: auto;
    height: 200px;
    border: none;
  }
  td{
    height: 30px;
    padding: 4px;
    border-bottom: solid 1px;
    font-weight: 500;
  }
  th{
    height: 30px;
    padding: 5px;
    font-weight: 300;
    border: none;
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
    font-weight: 300;
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
  .right{
    text-align: center;
  }
</style>
