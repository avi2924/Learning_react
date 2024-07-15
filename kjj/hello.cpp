#include<iostream>
#include<vector>
#include<stack>
#include<algorithm>
#include<string>
using namespace std;


vector<int> survivedRobotsHealths(vector<int>& positions, vector<int>& healths, string directions) {
        vector<vector<int>> robots;
        for(int i = 0; i<positions.size(); i++){
            robots.push_back({positions[i],healths[i],directions[i],i});
        }
        sort(robots.begin(),robots.end());
        stack<vector<int>> survive;
        for(auto x: robots){
            cout<<x[0]<<x[1]<<x[2]<<x[3]<<endl;
        }
        
        for(auto x:robots){
            if(survive.empty() || x[2] == 'R' || survive.top()[2] == 'L'){
                survive.push(x);
                continue;
            }

            if(x[2] == 'L'){
                bool add = true;
                while(!survive.empty() && survive.top()[2] == 'R'){
                    
                    if(x[1] > survive.top()[1]){
                        x[1] = x[1]-1;
                        survive.pop();
                    }
                    else if(x[1] < survive.top()[1]){
                        vector<int> hello = survive.top();
                        hello[1]-=1;
                        survive.pop();
                        survive.push(hello);
                    }
                    else{
                        survive.pop();
                        add = false;
                    }
                }
                if(add){
                    survive.push(x);
                }
            } 

        }
        robots.clear();
        while(!survive.empty()){
            robots.insert(robots.begin()+0,survive.top());
            survive.pop();
        }

        sort(robots.begin(),robots.end(),[](vector<int> &a,vector<int> &b){
            return a[3]<b[3];
        });
        vector<int> result;
        for(auto x: robots){
            result.push_back(x[1]);
        }

        return result;
    }

    int main(){
        vector<int> positions{5,4,3,2,1}; 
        vector<int> healths{2,17,9,15,1}; 
        string directions = "RRRRR";

        vector<int> answer = survivedRobotsHealths(positions,healths,directions);
        for(auto x: answer){
            cout<<x<<" ";
        }
    }