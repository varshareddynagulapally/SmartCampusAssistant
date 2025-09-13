import { campusInfo, schedules, facilities, diningOptions } from '../data/campusData';
import { CampusInfo } from '../types';

export class AIAssistant {
  private static searchKeywords(query: string, keywords: string[]): number {
    const queryWords = query.toLowerCase().split(/\s+/);
    let score = 0;
    
    queryWords.forEach(word => {
      keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(word) || word.includes(keyword.toLowerCase())) {
          score += 1;
        }
      });
    });
    
    return score;
  }

  static processQuery(query: string): string {
    const lowerQuery = query.toLowerCase();
    
    // Greetings
    if (lowerQuery.match(/\b(hi|hello|hey|good morning|good afternoon)\b/)) {
      return "Hello! I'm your Smart Campus Assistant. I can help you with information about schedules, facilities, dining options, library services, and administrative procedures. What would you like to know?";
    }

    // Help queries
    if (lowerQuery.match(/\b(help|what can you do|assist)\b/)) {
      return "I can help you with:\n\n• 📅 Class schedules and campus hours\n• 🏢 Campus facilities and locations\n• 🍽️ Dining options and meal times\n• 📚 Library services and study spaces\n• 📋 Administrative procedures and policies\n\nJust ask me anything about campus life!";
    }

    // Specific category queries
    if (lowerQuery.match(/\b(schedule|hours|time|when)\b/)) {
      const relevantSchedules = schedules.filter(schedule => {
        return lowerQuery.includes(schedule.name.toLowerCase()) || 
               lowerQuery.includes(schedule.location.toLowerCase()) ||
               lowerQuery.includes(schedule.type);
      });

      if (relevantSchedules.length > 0) {
        return "Here are the relevant schedules:\n\n" + 
               relevantSchedules.map(s => `📅 **${s.name}**\n⏰ ${s.time}\n📍 ${s.location}\n📆 ${s.day}`).join('\n\n');
      }
      
      return "Here are today's key schedules:\n\n" + 
             schedules.slice(0, 3).map(s => `📅 **${s.name}**\n⏰ ${s.time}\n📍 ${s.location}`).join('\n\n');
    }

    if (lowerQuery.match(/\b(dining|food|eat|restaurant|meal)\b/)) {
      return "🍽️ **Campus Dining Options:**\n\n" + 
             diningOptions.map(d => 
               `**${d.name}** (${d.type})\n📍 ${d.location}\n⏰ ${d.hours}\n🍴 ${d.cuisine.join(', ')}\n💰 ${d.pricing}`
             ).join('\n\n');
    }

    if (lowerQuery.match(/\b(facility|facilities|gym|health|computer|lab)\b/)) {
      const relevantFacilities = facilities.filter(facility => {
        return lowerQuery.includes(facility.name.toLowerCase()) || 
               lowerQuery.includes(facility.type.toLowerCase()) ||
               facility.amenities.some(amenity => lowerQuery.includes(amenity.toLowerCase()));
      });

      if (relevantFacilities.length > 0) {
        return "🏢 **Campus Facilities:**\n\n" + 
               relevantFacilities.map(f => 
                 `**${f.name}**\n📍 ${f.location}\n⏰ ${f.hours}\n📞 ${f.contact}\n🎯 ${f.amenities.join(', ')}`
               ).join('\n\n');
      }

      return "🏢 **Available Campus Facilities:**\n\n" + 
             facilities.map(f => `**${f.name}** - ${f.type}\n📍 ${f.location}\n⏰ ${f.hours}`).join('\n\n');
    }

    // Search through campus info
    const searchResults = campusInfo
      .map(info => ({
        ...info,
        score: this.searchKeywords(query, info.keywords)
      }))
      .filter(info => info.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    if (searchResults.length > 0) {
      return searchResults.map(info => 
        `📋 **${info.title}**\n\n${info.content}\n\n*Last updated: ${info.lastUpdated.toLocaleDateString()}*`
      ).join('\n\n---\n\n');
    }

    // Default response with suggestions
    return "I couldn't find specific information about that. Here are some things I can help you with:\n\n• Library hours and study rooms\n• Dining hall schedules and locations\n• Campus facilities and amenities\n• Registration and administrative procedures\n• Parking information\n• WiFi access\n\nTry asking about any of these topics!";
  }
}