#include<bits/stdc++.h>
using namespace std;
int main(){
  int s;
  cin>>s;
  string arr[s];
  for(int i=0;i<s;i++){
    cin>>arr[i];
  }
  int max=0;
  for(int i=0;i<s;i++){
    int count = 0;
    for(int j=0;j<arr[i].length();j++){
      if(arr[i][j] == 'C')
      count++;
    }
    if(count>max)
    max=count;
  }
  cout<<max;

}